<template>
  <NuxtLayout name="exam">
    <div class="p-10 mx-20 max-sm:mx-2 max-sm:p-4">
        <h1 class="text-2xl max-sm:text-md font-bold">Review Questions</h1>
        <div class="my-5 mr-20 max-sm:mr-4 text-justify">
            <p class="text-lg max-sm:text-sm font-semibold text-gray-50">On this page, you can review your test questions at a glance. Green indicates answered correctly, yellow for review, and gray for unanswered. Happy reviewing and good luck on your driving journey!</p>
        </div>
    <div class="grid grid-cols-10 max-sm:grid-cols-5 max-sm:gap-2 gap-5">
        <div v-for="(que,index) in questions" :key="index"  :class="checkState(index)" @click="revisit(index)" class="p-5 max-sm:p-4 rounded hover:shadow-md hover:shadow-green-400 duration-100 bg-gray-300 text-black text-center max-sm:text-xs">
            {{ index + 1 }}
        </div>

    </div>
    <h1 class=" mt-20 mb-5 max-sm:mt-5 text-xl">Key:</h1>
    <div class="grid grid-cols-2 w-fit gap-5 gap-x-3">
        <div class="p-5 w-28 max-sm:w-12 max-sm:p-2 rounded bg-green-300 text-black text-center">
            1
        </div>
        <label class="text-white flex flex-row items-center">
            Answered
        </label>
        <div class="p-5 w-28 max-sm:w-12 max-sm:p-2 rounded bg-yellow-300 text-black text-center">
            1
        </div>
        <label class="text-white flex flex-row items-center">
            Marked for Review
        </label>
        <div class="p-5 w-28 max-sm:w-12 max-sm:p-2 rounded bg-gray-300 text-black text-center">
            1
        </div>
        <label class="text-white flex flex-row items-center">
            Unanswered
        </label>
    </div>
    <div class="w-screen max-sm:w-fit h-fit p-2 text-black rounded-md bottom-7 max-sm:bottom-0 max-sm:p-0 flex flex-row justify-center items-center absolute">
        <div class="grid grid-cols-2  w-fit content-center bg-white shadow-md shadow-green-500 max-sm:shadow-none max-sm:p-2 max-sm:w-full max-sm:rounded-none p-4 rounded-md"> 
          <button @click="this.$router.back" class="bg-blue-500 hover:shadow-2xl hover:bg-blue-600 duration-100 p-2 text-lg text-white rounded-md mr-4 px-5 max-sm:text-sm">Back</button>
        <NuxtLink to="./evaluate" class="bg-blue-500 hover:shadow-2xl hover:bg-blue-600 duration-100 p-2 text-lg text-white rounded-md mr-4 px-5 max-sm:text-sm">Finalize</NuxtLink>
        </div>
    </div>
</div>
  </NuxtLayout>
</template>

<script>
export default {
data(){
    return{
        questions:[],
    }
},
methods:{
    revisit(index){
        //Go back to selected question
        localStorage.setItem('currentQuestion',index);
        this.$router.back()
    },
    checkState(index) {
        if(this.questions[index].state == null){
            return 'bg-gray-300';        
        }else{
            if(this.questions[index].state== "Marked for review"){
                return 'bg-yellow-300';
            }else{
               if(this.questions[index].state.length > 0 && this.questions[index].state != "Marked for review"){
                return 'bg-green-300';
               } 
            }
        }

      
       
    },

},
mounted(){
    if(localStorage.getItem('questions')){
        this.questions = JSON.parse(localStorage.getItem('questions'));
    }else{
        alert("No fetched questions yet")
    }
}
}
</script>

<style scope>
body{
overflow: hidden;
}
</style>