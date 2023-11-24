<template>
  <NuxtLayout name="instructor">
  <div>
    <div class="flex justify-between bg-green-900 px-10 py-3">
      <p class="text-white font-semibold text-lg">Instructor Dashboard</p>
      <InstructorModal />
    </div>
    <!-- Cards -->
    <div class="grid gap-6 lg:grid-cols-3 sm-grid-cols-2 py-4 px-5">
      <!-- Grid starts here -->
      
      <div class="flex items-center bg-red-500 rounded shadow-sm justify-between p-5">
          <div>
              <div class="text-sm text-gray-50">Students</div>
          <div class="flex items-center pt-1">
              <div class="text-3xl font-medium text-gray-600 p-1">20</div>        
          </div>                          
          </div>
          <div class="text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </div>
      </div>  
      <div class="flex items-center bg-green-600 rounded shadow-sm justify-between p-5">
        <div>
            <div class="text-sm text-gray-50">Questions</div>
        <div class="flex items-center pt-1">
            <div class="text-3xl font-medium text-gray-600 p-1">97</div>        
        </div>                          
        </div>
        <div class="text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
      </div>
      <NuxtLink to="/instructor/dashboard/exams" class="flex items-center border-2 border-blue-500 bg-white rounded shadow-sm justify-between p-5">
          <div>
              <div class="text-sm text-blue-500">View questions</div>                          
          </div>
          <div class="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </div>
      </NuxtLink>
  
      <!-- Grid ends here -->
  </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">First Name</th>
            <th scope="col" class="px-6 py-3">Last Name</th>
            <th scope="col" class="px-6 py-3">National ID</th>
            <th scope="col" class="px-6 py-3">Class Type</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in filteredItems"
            :key="item._id"
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
          <td class="px-6 py-4">{{ item.created_at }}</td>
            <td class="px-6 py-4">{{ item.first_name }}</td>
            <td class="px-6 py-4">{{ item.last_name }}</td>
            <td class="px-6 py-4">{{ item.national_id }}</td>
            <td class="px-6 py-4">{{ item.class_type }}</td>
          </tr>
        </tbody>
      </table>
    </div>
   
  </div>
</NuxtLayout>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      addModal: false,
      addModalHeading: "Add new user",
      idNumberFilter: "",
      nationalIDFilter: "",
      loading: false,
      editModal: false,
      deleteModal: false,
      editModalHeading: 'Edit Student',
      errors: {},
      student: {
        last_name: '',
        national_id: '',
        email: '',
        first_name: '',
      },
      item: [
      
      ],
    };
  },
  computed: {
    filteredItems() {
      let filteredItems = this.item;

      if (this.nationalIDFilter) {
        filteredItems = filteredItems.filter((items) =>
          items.national_id.toLowerCase().includes(this.nationalIDFilter.toLowerCase())
        );
      }

      return filteredItems;
    },
  },
  methods: {
    async getAllStudent(){
    this.loading = true;
    const URL = "http://driving.rapiddata.co.zw:9058/getStudents";
    const token = localStorage.token;
    await axios.get(URL, {
                headers: { "Content-Type": "application/json",
                Authorization : 'Bearer ' + localStorage.token,
              // 'Access-Control-Allow-Origin':'*'
             },
    }).then((res) =>
     {
      this.item = res.data;
      console.log("Fetching Data Completed...");
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
  },
  mounted(){
    this.getAllStudent()
  }
};
</script>

<style>
</style>