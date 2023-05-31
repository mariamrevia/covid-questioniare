<template>
  <CovidQuestion-Form @submit="onSubmit">
    <CovidQuestion/>
    <div>
      <router-link to="/identification">
        <img class="absolute top-59 right-[1019px] z-10" :src="directionBack" />
      </router-link>
      <button type="submit" class="absolute top-59 right-55 z-10">
        <img  :src="directionForward" />
      </button>
    </div>
  </CovidQuestion-Form>
</template>
<script>
import { Form } from 'vee-validate'
import directionForward from '@/assets/images/directionForward.png'
import CovidQuestion from '@/components/QuestionCovid.vue'
import directionBack from '@/assets/images/directionBack.png'
export default {
  components: {
    CovidQuestionForm: Form,
    CovidQuestion,  
  },
  data() {
    return {
      directionForward,
      directionBack,

    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/vaccination')
    }
  }
}
</script>
