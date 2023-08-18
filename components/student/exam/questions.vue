<template>
 <div class="m-auto grid grid-cols-2 max-sm:grid-cols-1 gap-5 p-6 max-sm:p-2">
  <div class="max-sm:order-last">
    <label class="max-sm:text-xs">Question {{ num + 1 }}</label>
    <h1 class="font-bold text-3xl max-sm:text-sm">{{ question.question }}</h1>
    <div class="my-5 max-sm:my-2">
      <ul class="flex flex-col">
    <li @click="addAnswer(option)" class="mb-5 max-sm:mb-2" v-for="(option,index) in question.choices" :key="index">
        <input :checked="state(option)" type="radio" :id="`hosting-small${option}`" name="hosting" value="option1" class="hidden peer" required>
        <label :for="`hosting-small${option}`" class="inline-flex items-center justify-between w-full p-5 max-md:p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-white peer-checked:text-white peer-checked:bg-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div class="w-full text-lg max-sm:text-sm font-semibold">{{ option }}</div>
        </label>
    </li>
</ul>
<button @click="markReview()" :class="checkMarked()" class="bg-gray-300 my-5 max-sm:my-1 text-black p-2 px-4 rounded-lg max-sm:text-sm">Mark for review</button>
      
    </div>
  </div>
  <div class="w-full max-sm:h-[150px] flex flex-row justify-center">
    <!-- <img src="https://dummy-pictures.com/1" alt="Image" width="400" srcset="" class="w-full h-[600px] object-contain"> -->
    <nuxt-img v-if="question.picture_url != null" fit="cover" quality="40" :src="question.picture_url" width="400" srcset="" class="w-full h-[600px] max-sm:h-[150px] object-contain"/>

  </div>
 </div>
</template>


<script setup>

</script>

<script>
export default {
props:['question','num'],
data(){
  return{
    allQuestions: [],
  }
},
methods:{
 
  state(option){
    this.$emit('update',23);
    if(option === this.question.state){
      return true
    }
    if(this.question.state == "Marked for review"){
      return false
    }
  },
  checkMarked(){
    if(this.question.state == "Marked for review"){
      return 'bg-yellow-500 text-black'
    }
  },
  addAnswer(option){
    
    this.updateQuestions(option);
    this.checkMarked();
    this.$emit('update',23);
  },
  markReview(){
    this.updateQuestions("Marked for review");
    this.checkMarked();
    this.$emit('update',23);
  },

  updateQuestions(message){
    //Get current question list
    this.allQuestions = JSON.parse(localStorage.getItem('questions'));
    //Select current question index and update state
    this.allQuestions[Number.parseInt(localStorage.getItem('currentQuestion'))].state = message
    //Update current questions
    localStorage.setItem('questions',JSON.stringify(this.allQuestions));
    this.$emit('update',23);
  }
},
mounted(){
  console.log();
  
  // if(localStorage.getItem('answeredQuestions')){
  //   alert("Hello")
  //   this.currentQuestions = JSON.parse(localStorage.answeredQuestions);
  // }else{
  //   this.currentQuestions = this.question;
  //   localStorage.answeredQuestions = JSON.stringify(this.currentQuestions);
  //   alert("Not found")
  // }
}
}
</script>

<style>

</style>