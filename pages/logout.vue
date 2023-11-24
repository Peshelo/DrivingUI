<template>
  <div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    localStorage.clear();
    this.$router.push('./auth/login');
}
}
</script>

<style>

</style>