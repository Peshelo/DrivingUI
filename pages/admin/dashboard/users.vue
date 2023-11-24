<template>
   <NuxtLayout name="admin" class="bg-gray-100">
    <div class="flex justify-between bg-green-900 px-10 py-3">
      <p class="text-white font-semibold text-lg">Instructors</p>
      <modal />
    </div>
    <div class="flex justify-between mx-5 mt-10">
      <div class="mb-4">
        <label for="emailFilter" class="block font-medium mb-1"
          >Filter by email:</label
        >
        <input
          v-model="emailFilter" id="emailFilter" type="text" class="border auto drop-shadow-lg border-gray-300 focus:border-blue-400 outline-none rounded-md px-4 py-2 w-full" placeholder="Search by email"
        />
      </div>
      <div>
        <!-- Add Button -->
        <button class="bg-blue-800  mt-10 px-4 py-3 font-semibold text-sm text-white hover:bg-blue-500 duration-150 rounded-md drop-shadow-lg cursor-pointer" @click="this.openAddModal">
          Add new
        </button>

        <!-- Modal -->
        <div v-if="addModal" class="z-10 pt-24 absolute inset-0 top-0 backdrop-brightness-50 backdrop-blur-sm w-screen h-screen flex items-center justify-center" >
          <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
            <!-- Modal Content -->
            <div class="flex justify-between border-b border-gray-300 p-2">
              <h2 class="text-2xl font-bold mb-4">{{ addModalHeading }}</h2>
              <button class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md" @click="closeAddModal()" > X </button>
            </div>
            <label v-if="this.errors.NET" class="p-2 text-red-500">{{ this.errors }}</label>
            <p v-if="loading" class="p-4">Adding new user...
            </p>
            
            <form v-else @submit.prevent="addInstructor()" id="addForm" class="grid grid-cols-2 gap-4 p-8 mb-2" >
              <!-- First Name -->
              <div class="mb-2">
                <label for="firstname" >First name:</label >
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" v-model="instructor.first_name"/>
                <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2" >*{{ this.errors.firstname }}</p>
              </div>
              <!-- Last Name -->
              <div class="mb-2">
                <label for="lastname">Last Name:</label>
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" v-model="instructor.last_name" />
                <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.lastname }}</p>
              </div>
              <!-- Email -->
              <div class="mb-2">
                <label for="email">Email:</label>
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" v-model="instructor.email" />
                <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.email }}</p>
              </div>
            
              <!-- Email -->
              <div class="mb-2">
                <label for="email" >Username:</label >
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="username" v-model="instructor.username" />
                <p v-if="this.errors.username" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.username }} </p>
              </div>
              <!-- Password -->
              <div class="mb-2">
                <label for="password" >Password:</label >
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" v-model="instructor.password"/>
                <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.password }} </p>
              </div>
              <!-- Submit Button -->
            </form>
            <div class="w-full px-8">
                <button type="submit" form="addForm" class="bg-blue-500 w-full p-2 text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :disabled="loading"> {{loading ? "Loading" : "Submit"}} </button>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-auto drop-shadow-lg border border-gray-400 sm:rounded-md mx-5 my-2">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-300 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">First Name</th>
            <th scope="col" class="px-6 py-3">Last Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Username</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in filteredItems"
            :key="item._id"
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
            
            <td class="px-6 py-4">{{ item.first_name }}</td>
            <td class="px-6 py-4">{{ item.last_name }}</td>
            <td class="px-6 py-4">{{ item.email }}</td>
            <td class="px-6 py-4">{{ item.username }}</td>
            <td class="px-2 py-4 flex flex-row gap-x-2 justify-center items-center">
              <a href="#" class="font-medium  hover:text-yellow-400 dark:text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" @click="fetchInstructorByEmail(item.email)" class="material-symbols:edit-square-outline" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
              </a >
              <a href="#" class="font-medium hover:text-red-500 dark:text-blue-500 hover:underline" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
              </a >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="editModal" class="z-10 ml-40 pt-72 absolute inset-0 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
        <!-- Modal Content -->
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold mb-4">{{ editModalHeading }}</h2>
          <button class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md" @click="closeEditModal">X</button>
        </div>
        <p v-if="loading">Edit Instructor</p>
            <form v-else @submit.prevent="editInstructor()" class="grid grid-cols-2 gap-12 bg-white shadow-md rounded px-8 py-6 mb-4" >
              <!-- First Name -->
              <div class="mb-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname" >First name:</label >
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" v-model="instructor.first_name"/>
                <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2" >*{{ this.errors.firstname }}</p>
              </div>
              <!-- Last Name -->
              <div class="mb-4">
                <label for="lastname">Last Name:</label>
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" v-model="instructor.last_name" />
                <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.lastname }}</p>
              </div>
              <!-- Email -->
              <div class="mb-4">
                <label for="email">Email:</label>
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" v-model="instructor.email" />
                <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.email }}</p>
              </div>
            
              <!-- Email -->
              <div class="mb-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email" >Username:</label >
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="username" v-model="instructor.username" />
                <p v-if="this.errors.username" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.username }} </p>
              </div>
              <!-- Password -->
              <div class="mb-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password" >Password:</label >
                <input class="border appearance-none border-gray-400 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" v-model="instructor.password"/>
                <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2" > *{{ this.errors.password }} </p>
              </div>
              <!-- Submit Button -->
              <div class="ml-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" > Submit </button>
              </div>
            </form>       
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
      emailFilter: "",
      loading: false,
      editModal: false,
      deleteModal: false,
      editModalHeading: 'Edit Instructor',
      errors: {},
      instructor: {
        last_name: '',
        password: '',
        email: '',
        first_name: '',
        email: '',
      },
      item: [],
    };
  },
  computed: {
    filteredItems() {
      let filteredItems = this.item;

      if (this.emailFilter) {
        filteredItems = filteredItems.filter((items) =>
          items.email.toLowerCase().includes(this.emailFilter.toLowerCase())
        );
      }

      return filteredItems;
    },
  },
  methods: {
    openAddModal() {
      this.addModal = true;
    },
    closeAddModal() {
      this.addModal = false;
    },
    async addInstructor() {
      this.loading = true;
      this.errors = {};
      if (!this.instructor.first_name) {
        this.errors.firstname = "Firstname is required";
      }
      if (!this.instructor.last_name) {
        this.errors.lastname = "Lastname is required";
      }
      if (!this.instructor.email) {
        this.errors.email = "Email is required";
      }
      if (!this.instructor.username) {
        this.errors.username = "Username is required";
      }
      if (!this.instructor.password) {
        this.errors.password = "Password is required";
      }
      if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        try {
          await axios.post("http://driving.rapiddata.co.zw:9058/users",
              {
                last_name: this.instructor.last_name,
                email: this.instructor.email,
                first_name: this.instructor.first_name,
                username:  this.instructor.username,
                password: this.instructor.password
              },
              {
                headers: { "Content-Type": "application/json",
                Authorization : 'Bearer ' + localStorage.getItem("token"),
              // 'Access-Control-Allow-Origin':'*'
             },
                // credentials: "include"
              }
            )
            .then((response) => {
              const data = response.data;
              alert("Instructor added successfully.");
              this.response = data;
              this.last_name = null;
              this.email = null;
              this.first_name = null;
              this.username = null;
              this.password = null;
              this.addModal = false;
              this.fetchInstructor();
              console.log(response);
            });
        } catch (err) {
          this.errors.failed = "Sorry, an error occured!";
          this.errors.ERR = err;
        } finally {
          this.loading = false;
        }
      }
    },
    async fetchInstructor(){
    this.loading = true;
    const URL = "http://driving.rapiddata.co.zw:9058/getUsers";
    const token = localStorage.token;
    await axios.get(URL, {
                headers: { "Content-Type": "application/json",
                Authorization : 'Bearer ' + localStorage.token,
              // 'Access-Control-Allow-Origin':'*'
             },
    }).then((res) =>
     {
      this.item = res.data;
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    async fetchInstructorByEmail(email){
          this.loading = true;
    const URL = `http://driving.rapiddata.co.zw:9058/users/${email}`;
    // const token = localStorage.token;
    await axios.get(URL,{
      headers: { "Content-Type": "application/json",
                Authorization : 'Bearer ' + localStorage.token,
              // 'Access-Control-Allow-Origin':'*'
             },
    }).then((res) =>
     {
      this.instructor = res.data
      this.editModal = true;
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    openEditModal() {
        this.editModal = true;
    },
    closeEditModal() {
      this.editModal = false;
    },
    openDeleteModal(id) {
      this.deleteModal = true;
      this.FID = id;
      },
      closeDeleteModal() {
        this.deleteModal = false;
      },
  },
  mounted(){
    this.fetchInstructor()
  }
};
</script>

<style>

</style>