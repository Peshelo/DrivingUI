<template>
  <NuxtLayout name="default">
    <p v-if="loading">Evaluating answers...</p>
<div v-else :class="getClassNames()" class="w-screen h-screen text-white bg-green-700 flex flex-col justify-center items-center">
<h1 class="text-xl font-semibold">{{ this.studentName }}</h1>
<label class="text-8xl my-4">{{this.markedTest.percentage.toFixed(2)}}%</label>
<label class="text-xl font-semibold text-yellow-200">Time taken: 21 minutes</label>

<NuxtLink to="../../instructor" class="p-2 absolute bottom-10 px-6 text-lg rounded-md bg-yellow-500 text-black">
Done
</NuxtLink>
</div>
  </NuxtLayout>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      isPass: true,
      myAnswers:[],
      newArray:[],
      markedTest:[],
      loading:true,
      studentName:"",
      errors:[]
    };
  },
  methods: {
    getClassNames() {
      return this.isPass ? 'bg-green-700' : 'bg-red-700';
    },
  convertedArray(arr) {
  const convertedArray = arr.map((item) => ({
    question_id: item._id,
    selected_answer: item.state !== null ? item.state : "No answer provided",
  }));
  return convertedArray;
},
  async evaluateTest(){
    
             if (Object.keys(this.errors).length === 0) {
        // Your code for handling the login form submission
        this.loading = true;
        try{
         await axios.post(`http://localhost:8000/evaluate?student_id=${localStorage.studentID}`,this.newArray,{
             headers: {'Content-Type': 'application/json',
             Authorization : 'Bearer ' + localStorage.token,
             'Access-Control-Allow-Origin': '*'
           },
             credentials: 'include',
           }).then((response) =>{
           const data = response.data;
           console.log(data);
           this.markedTest = data;
           if(data.percentage >=  88){
            this.isPass = true
            // alert(`Congratulations! You scored ${data.percentage}/100.`)
           }else{
            this.isPass = false
            // alert(`Awwww! You scored ${data.percentage}/100.`)
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
},
mounted(){
    console.log("Hello")
    this.myAnswers = JSON.parse(localStorage.getItem('questions'));
    this.newArray = this.convertedArray(this.myAnswers);
    console.log("mounted", this.newArray)
    this.studentName = localStorage.studentName;
    this.evaluateTest();
}
};
</script>