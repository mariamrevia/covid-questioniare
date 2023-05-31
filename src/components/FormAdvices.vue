<template>
  <div class="mt-1.25 overflow-y-auto no-scrollbar h-50">
    <p class="w-32">
      რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები
      ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
      ბევრისთვის კი — ჩვენთან გადმოსვლის
    </p>
    <br />
    <p class="w-32">
      პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც
      გაიშვიათდა.
    </p>
    <Advices-Form @submit="onSubmit">
      <AdvicesQuestion />
      <div class="w-32 flex flex-col">
        <text-Area
          :value="advicesData.what_about_meetings_in_live"
          name="what_about_meetings_in_live"
          @input="updateValue"
          label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
        ></text-Area>
        <text-Area
          :value="advicesData.tell_us_your_opinion_about_us"
          name="tell_us_your_opinion_about_us"
          @input="updateValue"
          label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
        ></text-Area>
      </div>
      <div class="flex flex-row justify-end">
        <button
          type="submit"
          class="bg-green text-white text-lg mt-3 h-3.6 w-11 rounded-1.6 content-end"
        >
          დასრულება
        </button>
      </div>
    </Advices-Form>
    <div class="mb-10">
      <router-link to="vaccination">
        <img class="absolute top-59 right-63 mb-6" :src="directionBack" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import AdvicesQuestion from '@/components/QuestionAdvices.vue'
import { mapGetters } from 'vuex'
import directionBack from '@/assets/images/directionBack.png'
import textArea from '@/components/ui/TextArea.vue'
export default {
  components: {
    AdvicesForm: Form,
    AdvicesQuestion,
    textArea,
    
  },

  data() {
    return {
      directionBack
    }
  },

  computed: {
    ...mapGetters({
      advicesData: 'AdvicesModel/advicesData',
      identificationData: 'IdentificationModel/identificationData',
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
      const numberOfdaysInOffice = Number(this.advicesData.number_of_days_from_office)
      return {
        ...this.advicesData,
        ...this.identificationData,
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
      this.$store.dispatch('AdvicesModel/updateAdvicesData', { value, name })
    },
    async onSubmit() {
    try {
      await this.$store.dispatch('AdvicesModel/sendDatatoAPI', this.combinedData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  }
}
</script>

