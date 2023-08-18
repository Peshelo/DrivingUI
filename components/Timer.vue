<!-- components/Timer.vue -->
<template>
    <div class="timer">
      Time: {{ formatTime(time) }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      time: {
        type: Number,
        required: true,
      },
    },
    methods: {
      formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
  
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      },
    },
  };
  </script>
  