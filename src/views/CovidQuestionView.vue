<template>
   <TheHeader currentPage="2"/>
    <div class="pl-200 pr-165 flex flex-row justify-between">
      <FormCovidQuestion />
      <div class="relative">
        <img :src="vaccineimg" alt="vaccineimg" class="-z-10" />
        <transition appear name="circle">
          <img :src="mainLogo" class="absolute top-230 left-127 -z-10 opacity-100" />
          <!-- <div class="absolute top-230 left-127 bg-slate-700 -z-10 w-[900px] h-[90px]"></div> -->
        </transition>
      </div>
    </div>
  </template>
  <script>
  import FormCovidQuestion from '@/components/FormCovidQuestion.vue'
  import vaccineimg from '@/assets/images/vaccinate2.png'
  import mainLogo from '@/assets/images/mainlogo.png'
  import TheHeader from '@/components/shared/TheHeader.vue'
 
  export default {
    components: {
      TheHeader,
      FormCovidQuestion
    },
    data() {
      return {
        vaccineimg,
        mainLogo
      }
    },
  }
  </script>
  
  <style>
  .circle-enter-active {
    transition: opacity 0.5s ease-in-out, transform 1s;
  }
  
  .circle-enter-from {
    transform: scale(0);
    transform: translate(100%, -80%);
    opacity: 0;
  }
  .circle-enter-to {
    transform: scale(1);
    transform:translateX(0%);
    opacity: 1;
  }
  </style>
  