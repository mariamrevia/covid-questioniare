<template>
  <CovidQuestion-Form @submit="onSubmit">
    <CovidQuestion/>
    <div>
      <router-link to="/identification">
        <img class="absolute top-59 right-[1019px] z-10" :src="vector" />
      </router-link>
      <button type="submit" class="absolute top-59 right-55 z-10">
        <img  :src="navigationButton" />
      </button>
    </div>
  </CovidQuestion-Form>
</template>
<script>
import { Form } from 'vee-validate'
import navigationButton from '@/assets/images/Vector2.png'
import CovidQuestion from './QuestionCovid.vue'
import vector from '@/assets/images/Vector7.png'
export default {
  components: {
    CovidQuestionForm: Form,
    CovidQuestion,  
  },
  data() {
    return {
      navigationButton,
      vector,

    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/vaccination')
    }
  }
}
</script>
