<template>
  <NuxtLayout name="instructor">
  <div class="h-screen">
  <div class=" bg-gray-200 dark:bg-gray-900 flex flex-cols-2">
    <div class="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
      <div class="h-2/4 sm:h-64 overflow-hidden">
        <img class="w-full rounded-t"
          src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="Photo by aldi sigun on Unsplash" />
      </div>
      <div class="">
        <div v-if="user.length < 1">Loading...</div>
        <div v-else class="px-7 mb-8">
          <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">{{user.name}}</h2>
        <table class="text-xs my-3">
                  <tbody><tr>
                      <td class=" py-2 text-gray-500 font-semibold pr-2">Address:</td>
                      <td class=" py-2 ml-2">{{user.address}}</td>
                  </tr>
                  <tr>
                      <td class=" py-2 text-gray-500 font-semibold pr-2">Phone Number:</td>
                      <td class=" py-2 ml-2">{{user.phone}}</td>
                  </tr>
                  <tr>
                      <td class=" py-2 text-gray-500 font-semibold pr-2">Email:</td>
                      <td class=" py-2 ml-2">{{user.email}}</td>
                  </tr>
              </tbody></table>
          </div>
        </div>
    </div>
    <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
      <div class="w-full">
          <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Update your account.
          </h1>

          <form class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
              <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                  <input type="text" placeholder="First Name" v-model="user.name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Address</label>
                  <input type="text" v-model="user.address" placeholder="${user.address}" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                  <input type="text" v-model="user.phone" placeholder="xx-xxxxxx-xx-x" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                <input type="email" v-model="user.email" placeholder="johndoe@gmail.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
          </form>
          
          <div class="mt-6">
            <button type="button" @click="updateOrganizationHandler" class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Update Profile
            </button>
        </div>  
      </div>
    </div>
    </div>
    
  </div>
   </NuxtLayout>
  

</template>

<script>
import axios from 'axios';
  export default {
    data(){
        return{
            user:[]
        }
    },
    name: 'updateStudent',
    student(){
        return{
            firstName: null,
            lastName: null,
            address: null,
            gender: null,
            studentNumber: null,
            email: null,
        }
    },
    methods:{
        async updateOrganizationHandler(){
            const student = {
                'firstName': this.firstName,
                'lastName': this.lastName,
                'address': this.address,
                'gender': this.gender,
                'studentNumber': this.studentNumber,
                'email':this.email,
            }
           
            console.log(student);
            try{
                if(this.firstName != null && this.lastName != null && this.address != null && this.gender != null && this.studentNumber != null && this.email != null){
                    const res = await this.$axios.put('http://localhost:8083/students/updateStudent',student)
                    alert("You account has updated successfully.")
            }
            else{
                alert("You account has updated successfully.")
            }
                    
                
            }
            catch(e){
                console.log(e.message)
            }
        },
        async getOrganization(){
      const email = localStorage.email.replace('%40', '@');
      this.loading = true;
      const URL = "http://driving.rapiddata.co.zw:9058/getOrganisation/{email}?organization_email=info%40ring.co.zw";
      // const URL = "http://driving.rapiddata.co.zw:9058/getOrganisation/{email}?orgianization_email=" + email;
      await axios.get(URL,{
        headers: { "Content-Type": "application/json",
                Authorization : 'Bearer ' + localStorage.token,
              // 'Access-Control-Allow-Origin':'*'
             },
      }).then((res) =>
       {
        this.user = res.data;
        console.log(this.user);
        console.log(typeof(this.user))
        console.log("Fetching  user Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
  },
  mounted(){
  this.getOrganization()
}
    }


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>