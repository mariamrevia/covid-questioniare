<template>
  <CovidQuestion-Form @submit="onSubmit" v-slot={meta}>
    <CovidQuestion />
   <ButtonNavigation :valid="meta.valid" to="identification"/>
  </CovidQuestion-Form>
</template>
<script>
import { Form } from 'vee-validate'
import CovidQuestion from '@/components/QuestionCovid.vue'
import ButtonNavigation from '@/components/ui/ButtonNavigation.vue'
export default {
  components: {
    CovidQuestionForm: Form,
    CovidQuestion,
    ButtonNavigation
  },
  methods: {
    onSubmit() {

      this.$router.push('vaccination')
    }
  }
}
</script>
