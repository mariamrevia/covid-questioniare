<template>
  <div>
    <div class="flex flex-col w-32 mt-2.75">
      <p for="name" class="font-bold mb-1.5 text-1.25">გაქვს გადატანილი Covid-19?*</p>
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

      <ErrorMessage class="text-red" name="had_covid" />
    </div>

    <div class="flex flex-col w-32 mt-2.75" v-if="data['had_covid'] === 'yes'">
      <p for="name" class="font-bold mb-1.5 text-1.25">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
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
      <ErrorMessage class="text-red" name="had_antibody_test" />
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
        id="date-input"
      />
    </div>
    <div
      class="flex flex-col gap-8 w-32 mt-2.75"
      v-if="data['had_antibody_test'] === 'yes' && data['had_covid'] === 'yes'"
    >
      <p class="font-bold text-1.25">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა</p>
      <Field
        name="test_date"
        class="w-32 h-3 border border-black bg-transparent pl-4"
        :value="testDate"
        @input="updateTestDate($event.target.value, 'test_date')"
        as="input"
        type="date"
        id="date-input"
        placeholder="რიცხვი"
        rules="bothFieldsRequired:number"
      />
      <ErrorMessage class="text-red" name="number" />
      <Field
        name="number"
        class="w-32 h-3 border border-black bg-transparent pl-4"
        :value="testNumber"
        @input="updateTestNumber($event.target.value, 'number')"
        as="input"
        type="number"
        placeholder="ანტისხეულების რაოდენობა"
        rules="bothFieldsRequired:test_date"
      />
      <ErrorMessage class="text-red" name="test_date" />
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import InputText from '@/components/ui/InputText.vue'
import InputRadio from '@/components/ui/InputRadio.vue'
export default {
  components: {
    Field,
    InputText,
    InputRadio,
    ErrorMessage
  },
  computed: {
    data: {
      get() {
        return this.$store.getters['CovidQuestionModel/getData']
      }
    },
    testDate() {
      return this.data.antibodies.test_date
    },
    testNumber() {
      return this.data.antibodies.number
    }
  },
  watch: {
    data: {
      handler(updatedData) {
        this.$store.dispatch('CovidQuestionModel/updateData', updatedData)
      },
      deep: true
    }
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
    }
  }
}
</script>
