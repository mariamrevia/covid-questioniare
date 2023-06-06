<template>
  <VactinationForm @submit="onSubmit" v-slot={meta}>
    <div>
      <Selector-Vaccination labelText="უკვე აცრილი ხარ?*">
        <InputRadio
          type="radio"
          as="input"
          name="had_vaccine"
          v-model="data.had_vaccine"
          value="yes"
          label="კი"
          rules="required"
          @change="clearVaccinationData"
        />
        <InputRadio
          type="radio"
          as="input"
          v-model="data.had_vaccine"
          name="had_vaccine"
          value="no"
          label="არა"
          rules="required"
          @change="clearVaccinationData"
        />
        <ErrorMessage class="text-red" name="had_vaccine" />
      </Selector-Vaccination>
      <Selector-Vaccination labelText="აირჩიე რა ეტაპზე ხარ*" v-if="data['had_vaccine'] === 'yes'">
        <InputRadio
          type="radio"
          as="input"
          v-model="data.vaccination_stage"
          name="vaccination_stage"
          value="first_dosage_and_registered_on_the_second"
          label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          v-model="data.vaccination_stage"
          name="vaccination_stage"
          value="fully_vaccinated"
          label="სრულად აცრილი ვარ"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          v-model="data.vaccination_stage"
          name="vaccination_stage"
          value="first_dosage_and_not_registered_yet"
          label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
          rules="required"
        />

        <ErrorMessage class="text-red" name="vaccination_stage" />
      </Selector-Vaccination>
      <div
        v-if="
          data['vaccination_stage'] === 'first_dosage_and_not_registered_yet' &&
          data['had_vaccine'] === 'yes'
        "
      >
        <p class="w-22 ml-2.5 mt-2.1">
          რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
          <a class="w-6.23 h-6.23 text-blue" :href="registrationLink">{{ registrationLink }}</a>
        </p>
      </div>
      <Selector-Vaccination labelText="რას ელოდები" v-if="data['had_vaccine'] === 'no'">
        <InputRadio
          type="radio"
          as="input"
          name="i_am_waiting"
          v-model="data.i_am_waiting"
          value="registered_and_waiting"
          label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          name="i_am_waiting"
          v-model="data.i_am_waiting"
          value="not_planning"
          label="არ ვგეგმავ"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          name="i_am_waiting"
          v-model="data.i_am_waiting"
          value="had_covid_and_planning_to_be_vaccinated"
          label="გადატანილი მაქვს და ვგეგმავ აცრას"
          rules="required"
        />
        <ErrorMessage class="text-red" name="i_am_waiting" />
      </Selector-Vaccination>

      <p class="w-22 ml-2.5 mt-2.1" v-if="data['i_am_waiting'] === 'not_planning'">
        <a class="text-blue" :href="registrationLink"> {{ registrationLink }}</a>
      </p>
      <p
        class="w-22 ml-2.5 mt-2.1"
        v-if="data['i_am_waiting'] === 'had_covid_and_planning_to_be_vaccinated'"
      >
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. 👉
        რეგისტრაციის ბმული:
        <a class="text-blue" :href="registrationLink"> {{ registrationLink }}</a>
      </p>
    </div>
    <ButtonNavigation :valid="meta.valid" to="covidQuestion" />
  </VactinationForm>
</template>

<script>
import { Form, ErrorMessage } from 'vee-validate'
import ButtonNavigation from '@/components/ui/ButtonNavigation.vue'
import InputRadio from '@/components/ui/InputRadio.vue'
import SelectorVaccination from '@/components/layout/SelectorVaccination.vue'
export default {
  components: {
    VactinationForm: Form,
    InputRadio,
    ErrorMessage,
    ButtonNavigation,
    SelectorVaccination
  },

  data() {
    return {
      registrationLink: 'https://booking.moh.gov.ge/'
    }
  },
  computed: {
    data: {
      get() {
        return this.$store.getters['vaccinationModel/vaccinationData']
      }
    }
  },
  watch: {
    data: {
      handler(updatedData) {
        this.$store.dispatch('vaccinationModel/updateVaccinationData', updatedData)
      },
      deep: true
    }
  },

  methods: {
    clearVaccinationData() {
      if (this.data.had_vaccine === 'yes') {
        this.data.vaccination_stage = ''
        this.data.i_am_waiting = ''
      }
      if(this.data.had_vaccine === 'no'){
        this.data.vaccination_stage = ''
        this.data.i_am_waiting = ''
      }
    },
    onSubmit() {
      this.$router.push('advices')
    }
  }
}
</script>
