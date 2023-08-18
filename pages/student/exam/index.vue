<template>
  <NuxtLayout name="default">
    <div class="w-screen text-center my-10">
      <button @click="this.$router.back" class="bg-blue-600 text-white p-2 px-4 rounded-md text-xl font-semibold mr-4">Back</button>
      <NuxtLink to="./exam/questions" class="bg-blue-600 text-white p-2 px-4 rounded-md text-xl font-semibold">Start</NuxtLink>
    </div>
  </NuxtLayout>
</template>



<script>
export default {

}
</script>

<style>

</style>