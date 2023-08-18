<template>
  <div class="bg-gray-800 text-white p-4 flex flex-row justify-between items-center m-auto w-full">
    <label>Upgrade Driving School</label>
    <label>Time: {{ formattedTime }}</label>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

const countdownDuration = 25 * 60 * 1000; // 25 minutes in milliseconds
const startTime = localStorage.getItem('countdownStartTime')
  ? parseInt(localStorage.getItem('countdownStartTime'))
  : new Date().getTime();
const endTime = startTime + countdownDuration;
const remainingTime = ref(endTime - new Date().getTime());
const formattedTime = computed(() => {
  const minutes = Math.floor(remainingTime.value / (1000 * 60));
  const seconds = Math.floor((remainingTime.value % (1000 * 60)) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});
let countdownInterval;

onMounted(() => {
  localStorage.setItem('countdownStartTime', startTime.toString());
  countdownInterval = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  clearInterval(countdownInterval);
  localStorage.removeItem('countdownStartTime');
});

function updateCountdown() {
  remainingTime.value = endTime - new Date().getTime();
  if (remainingTime.value <= 0) {
    clearInterval(countdownInterval);
    localStorage.removeItem('countdownStartTime');
    remainingTime.value = 0;
  }
}

// Watch for changes in remainingTime and update the countdown
watch(remainingTime, () => {
  if (remainingTime.value <= 0) {
    clearInterval(countdownInterval);
    localStorage.removeItem('countdownStartTime');
    remainingTime.value = 0;
  }
});
</script>

<style scoped>
/* Your styles go here */
</style>
