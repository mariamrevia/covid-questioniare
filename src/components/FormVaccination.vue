<template>
  <VactinationForm @submit="onSubmit">
    <div>
      <div class="flex flex-col w-[520px] mt-[44px]">
        <p for="name" class="font-bold mb-[25px] text-[20px]">{{ VactineQuestion }}</p>
        <InputRadio
          type="radio"
          as="input"
          name="had_vaccine"
          v-model="data.had_vaccine"
          value="yes"
          label="კი"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          v-model="data.had_vaccine"
          name="had_vaccine"
          value="no"
          label="არა"
          rules="required"
        />
        <ErrorMessage class="text-red" name="had_vaccine" />
      </div>
      <div class="flex flex-col w-[520px] mt-[48px]" v-if="data['had_vaccine'] === 'yes'">
        <p for="name" class="font-bold mb-[25px] text-[20px]">{{ StageQuestion }}</p>
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
      </div>
      <div
        v-if="
          data['vaccination_stage'] === 'first_dosage_and_not_registered_yet' &&
          data['had_vaccine'] === 'yes'
        "
      >
        <p class="w-[350px] ml-[40px] mt-[35px]">
          რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
          <a class="w-[100px] h-[100px]" :href="registrationLink">{{ registrationLink }}</a>
        </p>
      </div>

      <div class="flex flex-col w-[520px] mt-[48px]" v-if="data['had_vaccine'] === 'no'">
        <p for="name" class="font-bold mb-[25px] text-[20px]">{{ WaitingQuestion }}</p>
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
      </div>
      <p class="w-[350px] ml-[40px] mt-[35px]" v-if="data['i_am_waiting'] === 'not_planning'">
        <a :href="registrationLink">👉 {{ registrationLink }}</a>
      </p>
      <p
        class="w-[350px] ml-[40px] mt-[35px]"
        v-if="data['i_am_waiting'] === 'had_covid_and_planning_to_be_vaccinated'"
      >
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. 👉
        რეგისტრაციის ბმული
        <a :href="registrationLink">{{ registrationLink }}</a>
      </p>
    </div>
    <div>
      <button @click="navigateBack" class="absolute top-59 right-[1019px] z-10">
        <img :src="vector" />
      </button>
      <button type="submit" class="absolute top-59 right-55 z-10">
        <img :src="navigationButton" />
      </button>
    </div>
  </VactinationForm>
</template>

<script>
import { Form, ErrorMessage } from 'vee-validate'
import InputRadio from './ui/InputRadio.vue'
import navigationButton from '@/assets/images/Vector2.png'
import vector from '@/assets/images/Vector7.png'
export default {
  components: {
    VactinationForm: Form,
    InputRadio,
    ErrorMessage
  },

  data() {
    return {
      registrationLink: 'https://booking.moh.gov.ge/',
      navigationButton,
      vector,
      VactineQuestion: 'უკვე აცრილი ხარ?*',
      StageQuestion: 'აირჩიე რა ეტაპზე ხარ*',
      WaitingQuestion: 'რას ელოდები'
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
    onSubmit() {
      this.$router.push('/advices')
    },
    navigateBack() {
      this.$router.replace('/covidquestion')
    }
  }
}
</script>
