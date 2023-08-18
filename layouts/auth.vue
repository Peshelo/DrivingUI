<template>
  <div class="w-screen bg-slate-50 h-screen flex flex-col justify-between items-center">
    <img class="mx-auto h-40 bg-blend-multiply w-auto" src="https://www.codester.com/static/uploads/items/000/024/24213/preview-xl.jpg" alt="Your Company" />

    <slot/>
    <div class="w-full text-center mb-10">
        <label class="text-gray-400">Rapiddata Driving School App</label><br>
        <label class="text-xs text-gray-300">Home | About | Register | Signup | Terms and Conditions</label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>