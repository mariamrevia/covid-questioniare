<template>
  <TheHeader currentPage="3" />
  <div class="pl-200 pr-165 flex flex-row justify-between">
    <FormVaccination />
    <div class="relative">
      <img :src="doctor" alt="vaccineimg" class="-z-10" />
      <transition appear name="star">
        <img :src="vaccinationLogo" class="absolute top-[0px] left-[35px] -z-10 opacity-100" />
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

