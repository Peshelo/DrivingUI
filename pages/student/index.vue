<template>
  <NuxtLayout name="default">
    <div class="w-screen h-screen bg-white dark:bg-gray-800 flex flex-col justify-center items-center">
      <form @submit.prevent="" class="flex flex-col gap-y-3 h-fit items-start p-4">
        <div class="flex flex-row gap-x-2">
          <button class="bg-gray-300 text-black p-2 px-5 rounded-md">National ID</button>
          <button class="bg-gray-300 text-black p-2 px-5 rounded-md">Passport ID</button>
        </div>
        <div class="flex flex-col gap-y-2">
          <input v-model="national_id" type="text" name="Id" id="" placeholder="National Id" class="text-2xl p-2 px-4 rounded-md w-full bg-gray-100 border border-gray-400 outline-none focus:border-blue-500 duration-150 hover:drop-shadow-md dark:bg-white">
          <input v-model="first_name" disabled type="text" name="Id" id="" placeholder="Firstname" class="text-2xl p-2 px-4 rounded-md w-full bg-gray-100 border border-gray-400 outline-none focus:border-blue-500 duration-150 hover:drop-shadow-md dark:bg-white">
          <input v-model="last_name" disabled type="text" name="Id" id="" placeholder="Lastname" class="text-2xl p-2 px-4 rounded-md w-full bg-gray-100 border border-gray-400 outline-none focus:border-blue-500 duration-150 hover:drop-shadow-md dark:bg-white">
        </div>
        <div class="flex flex-row justify-between items-center">
          <button @click="handleSubmit" class="bg-gray-400 text-black p-2 px-4 rounded-md text-md">Class 1</button>
          <button @click="handleSubmit" class="bg-gray-400 text-black p-2 px-4 rounded-md text-md mx-4">Class 2,3,4</button>
        </div>
        <button @click="push" :disabled="!validate"  class="w-full disabled:opacity-30 bg-green-600 text-white text-2xl p-2 rounded-md font-bold">Start</button>
      </form>
    </div>
  </NuxtLayout>
</template>



<script setup>

// const { data } = await useFetch('/api/questions');
// let questions = JSON.stringify(data._rawValue.questions);

// localStorage.setItem('questions',questions)

</script>



<script>
import axios from 'axios';
export default {
  data(){
        return{
            username: "",
            password: "",
            first_name:"",
            last_name:"",
            email:"",
            class_type: 1,
            national_id: "",
            validate: false,
            loading: false,
            errored:false,
            errors: {},
            loading: false,
            errored: false,
            questions: []
        }
    },
    methods:{
        async handleSubmit(){
          let data= ''
            this.errors = {};
            if(!this.national_id){
                this.errors.password = "National Id is required!";
            }
            if (Object.keys(this.errors).length === 0) {
       // Your code for handling the login form submission
       this.loading = true;
       try{
        await axios.get(`http://app:8000/students/${this.national_id}`,{
            headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + localStorage.token,
            'Access-Control-Allow-Origin': '*'
          },
          data: data,
            credentials: 'include',
          }).then((response) =>{
          //Http 200 OK
          const data = response.data;
          console.log(data);
          if(data === "Student not found"){
            alert("User not found");
          }else{
            console.log("Student Authenticated")  
            this.first_name = data.first_name
            this.last_name = data.last_name
            this.validate = true
            localStorage.setItem('studentName',data.first_name + " " + data.last_name)
            localStorage.setItem('studentID',data._id);
            localStorage.setItem('currentQuestion',0)
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
        async getQuestions() {
        this.loading = true;
        const URL= `http://app:8000/questions`;
        await axios.get(URL, {
          headers: {
            'Content-Type': 'application/json',
              Authorization : 'Bearer ' + localStorage.token,
            'Accept': '*/*',
            'Access-Control-Allow-Origin': '*'
          }
        }).then((res) => {
          this.questions = res.data;
          localStorage.setItem('questions',JSON.stringify(this.questions))
          // this.greaterM = res.data.members
          console.log(this.questions);
        }).catch(error => {
          console.warn(error.code)
          alert(error);
          this.error = error.code;
          this.errored = true;
  
        }).finally(() => this.loading = false);
      },
        //Reroute the user to start exam
        push(){
      this.$router.push("../student/exam")
    },
    },
    mounted(){
      this.getQuestions();
    }
    }
</script>

<style>

</style>