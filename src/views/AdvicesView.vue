<template>
    <TheHeader currentPage="4"/>
    <div class="pl-200 pr-165 flex flex-row justify-between">
      <FormAdvices />
      <div class="relative">
        <img :src="bike" alt="vaccineimg" class="-z-10" />
        <transition appear name="star">
          <img :src="advicesLogo" class="absolute top-3.75 left-5 -z-10 opacity-100" />
        </transition>
      </div>
    </div>
  </template>
  <script>
  import FormAdvices from '@/components/FormAdvices.vue'
  import advicesLogo from '@/assets/images/advicesLogo.png'
  import bike from '@/assets/images/advicesImage.png'
  import TheHeader from '@/components/shared/TheHeader.vue'
  export default {
    components: {
      TheHeader,
      FormAdvices
    },
    data() {
      return {
        bike,
        advicesLogo
      }
    }
  }
  </script>
  
