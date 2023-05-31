<template>
  <TheHeader currentPage="3"/>
  <div class="pl-200 pr-165 flex flex-row justify-between">
    <FormVaccination />
    <div class="relative">
      <img :src="doctor" alt="vaccineimg" class="-z-10" />
      <transition appear name="star">
        <img :src="vaccinationLogo" class="absolute top-[0px] left-[35px] -z-10 opacity-100" />
        <!-- <div class="absolute top-230 left-127 bg-slate-700 -z-10 w-[900px] h-[90px]"></div> -->
      </transition>
    </div>
  </div>
</template>
<script>
import FormVaccination from '@/components/FormVaccination.vue'
import vaccinationLogo from '@/assets/images/vaccinationLogo.png'
import doctor from '@/assets/images/vaccinationImage.png'
import TheHeader from '@/components/shared/TheHeader.vue'
export default {
  components: {
    TheHeader,
    FormVaccination
  },
  data() {
    return {
      doctor,
      vaccinationLogo
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
  transform: translate(-80%, 80%);
  opacity: 0;
}
.star-enter-to {
  transform: scale(1);
  transform: translateX(0%);
  opacity: 1;
}
</style>
