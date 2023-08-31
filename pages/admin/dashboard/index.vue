<template>
  <NuxtLayout name="admin">
   <div class="flex justify-between bg-green-900 px-10 py-3">
     <p class="text-white font-semibold text-lg">Dashboard</p>
     <modal />
   </div>
   <div class="grid gap-6 lg:grid-cols-3 sm-grid-cols-2 py-4 px-5">
      <!-- Grid starts here -->
      <div class="flex items-center bg-blue-500 rounded shadow-sm justify-between p-5">
          <div>
              <div class="text-sm text-gray-50">Instructors</div>
          <div class="flex items-center pt-1">
              <div class="text-3xl font-medium text-gray-600 p-1">2</div>        
          </div>                          
          </div>
          <div class="text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </div>
      </div>
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
   
  
      <!-- Grid ends here -->
  </div>
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
     <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       <thead
         class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
       >
         <tr>
           <th scope="col" class="px-6 py-3">First Name</th>
           <th scope="col" class="px-6 py-3">Last Name</th>
           <th scope="col" class="px-6 py-3">Email</th>
           <th scope="col" class="px-6 py-3">Username</th>
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
           <td class="px-2 py-4">
             <a href="#" class="font-medium text-green-500 dark:text-blue-500 hover:underline">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" @click="fetchInstructorByEmail(item.email)" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
             </a >
           </td>
           <td class="px-2 py-4">
             <a href="#" class="font-medium text-yellow-500 dark:text-blue-500 hover:underline" >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
             </a >
           </td>
         </tr>
       </tbody>
     </table>
   </div>

  </NuxtLayout>
</template>

<script>
import axios from 'axios'
export default {
 data() {
   return {
     loading: false,
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
               Authorization : 'Bearer ' + localStorage.token,
             // 'Access-Control-Allow-Origin':'*'
            },
               // credentials: "include"
             }
           )
           .then((response) => {
             const data = response.data;
             alert("Instructor added successfully.");
             this.response = data;
             console.log(response);
           });
       } catch (err) {
         console.log("Error:", err);
         this.errors.failed = "Sorry, an error occured!";
         this.errors.ERR = err;
       }
       console.log("Form submitted successfully");
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
     console.log("Fetching Data Completed...");
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
     console.log(this.instructor);
     console.log("Information tatora baba.");
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