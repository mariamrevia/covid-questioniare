<template>
    <TheHeader currentPage="4"/>
    <div class="pl-200 pr-165 flex flex-row justify-between">
      <FormAdvices />
      <div class="relative">
        <img :src="bike" alt="vaccineimg" class="-z-10" />
        <transition appear name="star">
          <img :src="mainLogo" class="absolute top-3.75 left-5 -z-10 opacity-100" />
        </transition>
      </div>
    </div>
  </template>
  <script>
  import FormAdvices from '@/components/FormAdvices.vue'
  import mainLogo from '@/assets/images/mainlogo4.png'
  import bike from '@/assets/images/bike.png'
  import TheHeader from '@/components/shared/TheHeader.vue'
  export default {
    components: {
      TheHeader,
      FormAdvices
    },
    data() {
      return {
        bike,
        mainLogo
      }
    }
  }
  </script>
  
  <style>
  .star-enter-active {
    transition: opacity 0.5s ease-in-out, transform 1s;
  }
  
  .star-enter-from {
    transform: scale(0);
    transform: translate(-70%, 80%);
    opacity: 0;
  }
  .star-enter-to {
    transform: scale(1);
    transform: translateX(0%);
    opacity: 1;
  }
  </style>