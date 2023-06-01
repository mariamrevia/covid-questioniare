<template>
  <TheHeader currentPage="2" />
  <div class="pl-200 pr-165 flex flex-row justify-between">
    <FormCovidQuestion />
    <div class="relative">
      <img :src="covidQuestionImage" alt="vaccineimg" class="-z-10" />
      <transition appear name="circle">
        <img :src="covidQuestionLogo" class="absolute top-230 left-6.25 -z-10 opacity-100" />
      </transition>
    </div>
  </div>
</template>
<script>
import FormCovidQuestion from '@/components/FormCovidQuestion.vue'
import covidQuestionImage from '@/assets/images/covidQuestionImage.png'
import covidQuestionLogo from '@/assets/images/covidQuestionLogo.png'
import TheHeader from '@/components/shared/TheHeader.vue'

export default {
  components: {
    TheHeader,
    FormCovidQuestion
  },
  data() {
    return {
      covidQuestionImage,
      covidQuestionLogo
    }
  }
}
</script>
