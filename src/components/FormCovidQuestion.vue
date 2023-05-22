<template>
  <CovidQuestionForm @submit="onSubmit">
    <div>
      <div class="flex flex-col w-32 mt-2.75">
        <p for="name" class="font-bold mb-1.5 text-1.25">{{ CovidQuestion }}</p>
        <InputRadio
          type="radio"
          as="input"
          name="had_covid"
          v-model="data.had_covid"
          value="yes"
          label="კი"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          name="had_covid"
          v-model="data.had_covid"
          value="no"
          label="არა"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          name="had_covid"
          id="have_right_now"
          v-model="data.had_covid"
          value="have_right_now"
          label="ახლა მაქვს"
          rules="required"
        />

        <ErrorMessage class='text-red' name="had_covid" />
      </div>

      <div class="flex flex-col w-32 mt-2.75" v-if="data['had_covid'] === 'yes'">
        <p for="name" class="font-bold mb-1.5 text-1.25">{{ TestQuestion }}</p>
        <InputRadio
          type="radio"
          as="input"
          name="had_antibody_test"
          v-model="data.had_antibody_test"
          value="yes"
          label="კი"
          rules="required"
        />
        <InputRadio
          type="radio"
          as="input"
          name="had_antibody_test"
          v-model="data.had_antibody_test"
          value="no"
          label="არა"
          rules="required"
        />
        <ErrorMessage class='text-red' name="had_antibody_test" />
      </div>

      <div
        class="flex flex-col w-32"
        v-if="data['had_antibody_test'] === 'no' && data['had_covid'] === 'yes'"
      >
        <InputText
          type="date"
          name="covid_sickness_date"
          :value="data.covid_sickness_date"
          @input="updateValue"
          as="input"
          placeholder="რიცხვი"
          rules="required"
        />
      </div>
      <div
        class="flex flex-col gap-8 w-32 mt-2.75"
        v-if="data['had_antibody_test'] === 'yes' && data['had_covid'] === 'yes'"
      >
        <p class="font-bold text-1.25">{{ TestDateQuestion }}</p>
        <Field
          name="test_date"
          class="w-32 h-3 border border-black bg-transparent pl-4"
          :value="testDate"
          @input="updateTestDate($event.target.value, 'test_date')"
          as="input"
          placeholder="რიცხვი"
          rules="bothFieldsRequired:number"
        />
        <ErrorMessage class='text-red' name="number" />
        <Field
          name="number"
          class="w-32 h-3 border border-black bg-transparent pl-4"
          :value="testNumber"
          @input="updateTestNumber($event.target.value, 'number')"
          as="input"
          placeholder="ანტისხეულების რაოდენობა"
          rules="bothFieldsRequired:test_date"
        />
        <ErrorMessage class='text-red' name="test_date" />
      </div>
    </div>
    <div>
      <router-link to="/identification">
        <img class="absolute top-59 right-[1019px] z-10" :src="vector" />
      </router-link>
      <button type="submit" class="absolute top-59 right-55 z-10">
        <img  :src="navigationButton" />
      </button>
    </div>
  </CovidQuestionForm>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import InputText from './ui/InputText.vue'
import InputRadio from './ui/InputRadio.vue'
import navigationButton from '@/assets/images/Vector2.png'
import vector from '@/assets/images/Vector7.png'
export default {
  components: {
    CovidQuestionForm: Form,
    Field,
    InputText,
    InputRadio,
    ErrorMessage
  },
  data() {
    return {
      submitted: false,
      navigationButton,
      vector,
      CovidQuestion: 'გაქვს გადატანილი Covid-19?*',
      TestQuestion: 'ანტისხეულების ტესტი გაქვს გაკეთებული?*',
      TestDateQuestion:
        'თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა'
    }
  },

  computed: {
    data: {
      get() {
        return this.$store.getters['CovidQuestionModel/getData']
      },
      set(value, name) {
        this.$store.dispatch('CovidQuestionModel/updateData', value, name)
      }
    },

    testDate() {
      return this.data.antibodies.test_date
    },
    testNumber() {
      return this.data.antibodies.number
    }
  },
  mounted() {
    console.log(this.data)
  },

  methods: {
    updateValue(value, name) {
      this.$store.dispatch('CovidQuestionModel/updateData', { value, name })
    },
    updateTestDate(value, name) {
      this.$store.commit('CovidQuestionModel/updateTestDate', { value, name })
    },
    updateTestNumber(value, name) {
      this.$store.commit('CovidQuestionModel/updateTestNumber', { value, name })
    },

    onSubmit() {
      this.$router.push('/vaccination')
    }
  }
}
</script>
