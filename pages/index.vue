<template>
    <NuxtLayout name="default">
    <div class="h-screen w-screen grid grid-cols-2 max-sm:grid-cols-1">
      <div class="group hover:bg-white hover:text-blue-800 duration-150 bg-blue-800 text-white text-2xl h-full w-full flex flex-col justify-center items-center">
        <h1 class="text-5xl font-bold mb-10 group-hover:text-6xl duration-150">Instructor</h1>
        <NuxtLink to="./auth/instructor" class="bg-white group-hover:bg-blue-700 group-hover:text-white duration-300 py-5 px-10 text-3xl font-2xl rounded-md text-blue-700 text-center">Login</NuxtLink>
      </div>
      <div class="group  hover:bg-white hover:text-green-800 duration-150 bg-green-800 text-white text-2xl h-full w-full flex flex-col justify-center items-center">
        <h1 class="text-5xl font-bold mb-10 group-hover:text-6xl duration-150">Admin</h1>
        <NuxtLink to="./admin/dashboard/" class="bg-white group-hover:bg-green-700 group-hover:text-white duration-300  py-5 px-10 text-3xl font-2xl rounded-md text-green-700 text-center">Login</NuxtLink>
      </div>
    </div>
    <button class="absolute bottom-4 left-4 w-fit  bg-gray-700 p-2 px-3 text-lg font-lg rounded-lg text-white text-center">Admin</button>
    </NuxtLayout>
</template>


<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
  <script>
  export default {
  //   beforeMount(){
  //   if(!localStorage.getItem('token')){
  //     this.$router.push('./auth/login');
  //   }
  // }
  }
  </script>
  
  <style>
  
  </style>