<template>
  <NuxtLayout name="instructor">
  <div>
    <nav
    class="relative w-full flex flex-wrap items-center justify-between py-3 bg-green-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
      <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
        <a class="text-xl text-white pr-2 font-semibold" href="#">Settings</a>
    
      </div>
      <!-- Collapsible wrapper -->
  
      <!-- Right elements -->
      <InstructorModal/>
      <!-- Right elements -->
    </div>
  </nav>
  <div class="flex">
    <div class="flex flex-col justify-between w-50 py-20  px-4 min-h-full">
        <div class="flex flex-col flex-auto py-10">
            <div class="p-2 hover:cursor-pointer">
                <div class="flex flex-row space-x-3 py-2 ">
                    <NuxtLink  class="font-medium text-gray-600 cursor-pointer hover:text-black" to="instructor/dashboard/settings/">My Profile</NuxtLink>
                </div>
                
            </div>
            <div class="p-2 hover:cursor-pointer">
              <div class="flex flex-row space-x-3 py-2 ">
                  <NuxtLink  class="font-medium text-gray-600 cursor-pointer hover:text-black" to="instructor/dashboard/settings/notifications">Notifications</NuxtLink>
              </div>
              
          </div>
        <div class="p-2 hover:cursor-pointer">
          <div class="flex flex-row space-x-3 py-2 ">
              <NuxtLink  class="font-medium text-gray-600 cursor-pointer hover:text-black" to="instructor/dashboard/settings/appearances">Appearances</NuxtLink>
          </div>
      </div>
        </div>
    </div>
    <div class="flex-grow relative min-w-screen ">
        <nuxt-child></nuxt-child>
    </div>
</div>
</div>
</NuxtLayout>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      isOpen: false,
      user:[]
    };
    
  }
};
</script>

<style scoped>

</style>