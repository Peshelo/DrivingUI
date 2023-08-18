<template>
  <NuxtLayout name="default" class="bg-slate-200">
    <div class="w-screen p-4 bg-blue-900 text-white">
      <label class="text-2xl font-semibold">Rapiddata Driving School</label>
    </div>
    <div class="text-center">
    <h1 class="text-lg my-4">Instructor Page</h1><br>
    <div class="flex flex-row justify-center items-center gap-2">
    <NuxtLink to="./dashboard/" class="p-5 bg-blue-400 border rounded-md border-black text-xl max-sm:text-md font-bold text-white">Dashboard</NuxtLink>
    <NuxtLink to="../student" class="p-5 bg-yellow-400 border rounded-md border-black text-xl max-sm:text-md font-bold">New Student Test</NuxtLink>

  </div>

   <div class="w-screen items-center h-[500px] grid grid-cols-2 gap-2 p-10 px-32 my-10">
    <div class="rounded-xl grid grid-cols-2 p-4 gap-2 bg-white shadow-inner  w-full h-[400px] rounded-xl">
      <div class="border border-blue-500 shadow-lg bg-blue-600 text-white group hover:bg-blue-500 duration-100 hover:text-white w-full h-full rounded-xl flex flex-col justify-center items-center">
        <h2 class="text-7xl font-bold">18</h2>
        <label class="text-sm mt-5">Number of students</label>
      </div>
      <div class="border border-blue-500 shadow-lg group hover:bg-yellow-400 duration-100 hover:text-white bg-yellow-500 w-full h-full rounded-xl flex flex-col justify-center items-center">
        <h2 class="text-7xl font-bold">7</h2>
        <label class="text-sm mt-5">Number of question</label>
      </div>
    </div>
    <div class=" w-full h-[400px] rounded-xl grid grid-cols-2 pl-4 gap-2">
      <div class="border border-blue-500 shadow-lg group hover:bg-blue-500 duration-100 hover:text-white bg-gray-50 w-full h-full rounded-xl flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold">General</h2>
        <label class="text-sm mt-5">Start new test</label>
      </div>
      <div class="border border-blue-500 shadow-lg group hover:bg-blue-500 duration-100 hover:text-white bg-gray-50 w-full h-full rounded-xl flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold">Road Rules</h2>
        <label class="text-sm mt-5">Start new test</label>
      </div>
      <div class="border border-blue-500 shadow-lg group hover:bg-blue-500 duration-100 hover:text-white bg-gray-50 w-full h-full rounded-xl flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold">Car Diagrams</h2>
        <label class="text-sm mt-5">Start new test</label>
      </div>
      <div class="border border-blue-500 shadow-lg group hover:bg-blue-500 duration-100 hover:text-white bg-gray-50 w-full h-full rounded-xl flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold">Road Signs</h2>
        <label class="text-sm mt-5">Start new test</label>
      </div>
    
    </div>
   </div>
    </div>
    <div class="w-screen p-5 flex flex-row justify-center items-center gap-x-4 bg-blue-900 text-white text-center text-sm">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/">About</NuxtLink> |
      <NuxtLink to="/">Dashboard</NuxtLink> |
      <NuxtLink to="/">Terms and Conditions</NuxtLink> 
    </div>
  </NuxtLayout>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>