<template>
  <div>
    <TheHeader currentPage="1" />
    <div class="pl-200 pr-165 flex flex-row justify-between">
      <FormIdentification />
      <div class="relative">
        <img :src="IdentificationImage" alt="mainLogo" class="-z-10" />
        <transition appear name="line">
          <img :src="identificationLogo" class="absolute top-230 left-127 -z-10 opacity-100" />
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
  })
}
</script>
