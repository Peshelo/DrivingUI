<template>
    <NuxtLayout name="auth"  class="">
      <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl bbold tracking-tight text-gray-800 font-bold">Instructor Login</h2>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white border py-4 px-4 shadow sm:rounded-lg sm:px-10">
            <p v-if="loading" class="text-center">Loading...</p>
            <form v-else @submit.prevent="handleSubmit()" class="space-y-4 m-4 w-[300px]">
              <div>
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <div class="mt-1">
                  <input v-model="username" id="username" name="username" type="text" autocomplete="username" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                </div>
                <p v-if="errors.username" class="text-sm text-red-600 text-left mb-2">*{{this.errors.username}}</p>
              </div>
    
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <div class="mt-1">
                  <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                </div>
                <p v-if="errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>
    
              </div>
    
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label for="remember-me" class="mx-2 block text-sm text-gray-900">Remember me</label>
                </div>
    
              </div>
    
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Login</button>
                <div class="text-sm w-full text-center mt-3">
                  <a href="#" class="font-medium my-2 text-center text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </NuxtLayout>
    </template>
    
    
    <script>
    import axios from 'axios'
    export default {
        data(){
            return{
                username: "",
                password: "",
                loading: false,
                errored:false,
                errors: {},
                loading: false,
                errored: false
            }
        },
        methods:{
            async handleSubmit(){
             
                this.errors = {};
                if(!this.username){
                    this.errors.username = "username is required";
                }
                if(!this.password){
                    this.errors.password = "Enter password";
                }
                if (Object.keys(this.errors).length === 0) {
           // Your code for handling the login form submission
           this.loading = true;
           try{
            await axios.post('http://app:8000/login',{
            username:this.username,
            password :this.password
            },{
                headers: {'Content-Type': 'application/json',
                // Authorization : 'Bear' + localStorage.token,
                'Access-Control-Allow-Origin': '*'
              },
                credentials: 'include',
              }).then((response) =>{
              const data = response.data;
              console.log(data);
    
              if(response.data == "User Not Found"){
                this.errors.failed = "Wrong Login details...";
                alert(this.errors.failed);
              }else{
                this.success="";
                this.success = "Login Sucessful...";
                // alert(this.success);
                console.log("Login Successful..")
                // localStorage.removeItem(token);
                localStorage.token = response.data[0].access_token;
                localStorage.setItem('organization_id', data[1])
                localStorage.setItem('email', data[2])
                localStorage.refresh_token = response.data[0].refresh_token;
                
                this.$router.push('../instructor/');
              }
            }).catch(error => {
            console.log(error)
            this.errored = true
            
          }).finally(() => this.loading = false);
    
    }catch(err){
      this.errors.network = "Error: " + err.message;
      this.errors.ERR = err;
    console.log("Error:",err.message)
    
    }
          }
            },
            push(){
          this.$router.push("../agentAccount/dashboard")
        },
        getTokenValue(tokenString) {
        const tokenArray = tokenString.split(' ')
        const tokenValue = tokenArray[tokenArray.indexOf('token') + 2]
        return tokenValue
        },
        getUserRole(tokenString) {
        const tokenArray = tokenString.split(' ')
        const tokenValue = tokenArray[tokenArray.indexOf('role') + 2].replace("[","").replace("]","");
        return tokenValue
        },
        }
        
    
    }
    </script>
    
    <style>
    
    </style>