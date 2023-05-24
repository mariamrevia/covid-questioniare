<template>
  <div class="mb-20">
    <p class="w-32">{{ paragraph1 }}</p>
    <br />
    <p class="w-32">{{ paragraph2 }}</p>
    <Advices-Form @submit="onSubmit">
      <AdvicesQuestion />
      <div class="w-32 flex flex-col">
        <p class="font-bold text-22 mt-3 mb-2">{{ OpinionAboutMeeting }}</p>
        <textarea
          :value="AdvicesData.what_about_meetings_in_live"
          class="bg-transparent border-[0.8px] outline-none h-[184px] border-black mt-[20px]"
          name="what_about_meetings_in_live"
          @input="updateValue($event.target.value, 'what_about_meetings_in_live')"
        ></textarea>
        <p class="font-bold mb-2 whitespace-break-spaces text-22 mt-3">
          {{ OpiniionAboutEnviroment }}
        </p>
        <textarea
          :value="AdvicesData.what_about_meetings_in_live"
          class="bg-transparent border-[0.8px] outline-none h-[184px] border-black mt-[20px]"
          name="what_about_meetings_in_live"
          @input="updateValue($event.target.value, 'what_about_meetings_in_live')"
        ></textarea>
      </div>
      <div class="flex flex-row justify-end">
        <button
          type="submit"
          class="bg-green text-white text-lg mt-[54px] h-[56px] w-[180px] rounded-[42px] content-end"
        >
          დასრულება
        </button>
      </div>
    </Advices-Form>
    <div class="mb-10">
      <router-link to="/vaccination">
        <img class="absolute top-[1800px] right-[1019px] mb-6" :src="vector" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import AdvicesQuestion from './AdvicesQuestion.vue'
import { mapGetters } from 'vuex'
import vector from '@/assets/images/Vector7.png'
export default {
  components: {
    AdvicesForm: Form,
    AdvicesQuestion
  },

  data() {
    return {
      vector,
      OpinionAboutMeeting: 'რას ფიქრობ ფიზიკურ შეკრებებზე?',
      OpiniionAboutEnviroment:
       'რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
    }
  },

  computed: {
    ...mapGetters({
    AdvicesData: 'AdvicesModel/AdvicesData',
    IdentificationData: 'IdentificationModel/IdentificationData',
    vaccinationData: 'vaccinationModel/vaccinationData',
    getData: 'CovidQuestionModel/getData'
  }),
    combinedData() {
      let hadVaccine
      let antiBodyTest
      if (this.vaccinationData.had_vaccine === 'yes') {
        hadVaccine = true
      } else if (this.vaccinationData.had_vaccine === 'no') {
        hadVaccine = false
      }

      if (this.getData.had_antibody_test === 'yes') {
        antiBodyTest = true
      } else if (this.getData.had_antibody_test === 'no') {
        antiBodyTest = false
      }
      const numberOfdaysInOffice = Number(this.AdvicesData.number_of_days_from_office)
      return {
        ...this.AdvicesData,
        ...this.IdentificationData,
        ...this.vaccinationData,
        ...this.getData,
        had_vaccine: hadVaccine,
        had_antibody_test: antiBodyTest,
        number_of_days_from_office: numberOfdaysInOffice
      }
    }
  },
  methods: {
    updateValue(value, name) {
      this.$store.dispatch('AdvicesModel/updateAdviceData', { value, name })
    },
    onSubmit() {
      this.$store.dispatch('AdvicesModel/sendDatatoAPI', this.combinedData)
    }
  }
}
</script>
