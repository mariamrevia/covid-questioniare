<template>
  <div>
    <TheHeader currentPage="1"/>
    <div class="pl-200 pr-165 flex flex-row justify-between">
      <FormIdentification />
      <div class="relative">
        <img :src="IdentificationImage" alt="mainLogo" class="-z-10" />
        <transition appear name="line">
          <img :src="identificationLogo" class="absolute top-230 left-127 -z-10 opacity-100" />
          <!-- <div class="absolute top-230 left-127 bg-slate-700 -z-10 w-[900px] h-[90px]"></div> -->
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import IdentificationImage from '@/assets/images/IdentificationImage.png'
import identificationLogo from '@/assets/images/identificationLogo.png'
import FormIdentification from '@/components/FormIdentification.vue'
import TheHeader from '@/components/shared/TheHeader.vue'


export default {
  components: {
    FormIdentification,
    TheHeader
  },
  data: () => ({
    IdentificationImage,
    identificationLogo
  }),
 
}
</script>
<style>
.line-enter-active {
  transition: opacity 0.5s ease-in-out, transform 1s;
}

.line-enter-from {
  transform: scale(0);
  transform-origin: bottom left;
  opacity: 0;
}
.line-enter-to {
  transform: scale(1);
  transform-origin: bottom left;
  opacity: 1;
}
</style>
