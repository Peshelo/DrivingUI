<template>
    <NuxtLayout name="exam">
      <p class="m-3 text-sm">{{ this.currentQuestion + 1 }}/{{ totalQuestions }}</p>
      
      <LazyStudentExamQuestions v-if="questionList.length > 0" :question="questionList[this.currentQuestion]" :num="this.currentQuestion" @update="getQuestions($event)" />
      <div class="w-full p-2 max-sm:p-0 text-black rounded-md bottom-7 max-sm:bottom-0 flex flex-row justify-center items-center absolute">
        <div class="grid grid-cols-3  w-fit max-sm:w-full content-center bg-white shadow-md shadow-green-500 p-4 max-sm:p-2 rounded-md max-sm:rounded-none max-sm:shadow-none"> 
          <button @click="this.prevQue()" class="bg-blue-500 hover:shadow-2xl max-sm:text-sm hover:bg-blue-600 duration-100 p-2 text-lg text-white rounded-md mr-4 px-5">Previous</button>
        <button @click="this.nextQue()"  class="bg-blue-500 hover:shadow-2xl max-sm:text-sm hover:bg-blue-600 duration-100 p-2 text-lg text-white rounded-md mr-4 px-5">Next</button>
        <LazyNuxtLink to="./review" class="bg-blue-500 hover:shadow-2xl max-sm:text-sm hover:bg-blue-600 duration-100 p-2 text-lg text-white rounded-md mr-4 px-5">Finalize</LazyNuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  
  <script>
  export default {
    data(){
      return{
        questionList: [],
        totalQuestions: '',
        currentQuestion: 0
      }
    },
  methods:{
    testing(){
      alert("Hello")
    },
      hello(){
        alert("Hello there");
      },
    nextQue(){
        if(this.currentQuestion + 1 < this.totalQuestions){
          this.currentQuestion++;
          localStorage.setItem('currentQuestion',this.currentQuestion);
        }
    },
    prevQue(){
      if(this.currentQuestion > 0){
        this.currentQuestion--;
        localStorage.setItem('currentQuestion',this.currentQuestion);
      }
      
    },
    getQuestions(){
      // Get fetched questions from localStorage
        this.questionList = JSON.parse(localStorage.getItem('questions'))
    }
      },
      mounted(){
        
        this.getQuestions()
        
        //Get  number of questions
        this.totalQuestions = this.questionList.length
        
        // Get current question index ? Set index to 0
        
        if(localStorage.getItem('currentQuestion')){
          this.currentQuestion = Number.parseInt(localStorage.getItem('currentQuestion'))
        }else{
          this.currentQuestion = 0;
          localStorage.setItem('currentQuestion',0);
        }
        console.log(this.questionList)
      }
    }
  </script>
  
  <style>
  
  </style>