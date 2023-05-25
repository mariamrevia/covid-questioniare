<template>
  <div class="flex flex-col w-32 mt-2.75">
    <div>
      <p class="font-bold mb-2">{{ NonFormalMeetings }}</p>
      <InputRadio
        type="radio"
        as="input"
        name="non_formal_meetings"
        value="twice_a_week"
        label="კვირაში ორჯერ"
        v-model="data.non_formal_meetings"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        name="non_formal_meetings"
        value="once_a_week"
        label="კვირაში ერთხელ"
        v-model="data.non_formal_meetings"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        name="non_formal_meetings"
        value="once_in_a_two_weeks"
        label="ორ კვირაში ერთხელ"
        v-model="data.non_formal_meetings"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        name="non_formal_meetings"
        value="once_in_a_month"
        label="თვეში ერთხელ"
        v-model="data.non_formal_meetings"
        rules="required"
      />
      <ErrorMessage name="non_formal_meetings" />
    </div>
    <div class="flex flex-col w-32 mt-2.75">
      <p class="text-22 font-bold mb-2">{{ WorkingInOffice }}</p>
      <InputRadio
        type="radio"
        as="input"
        name="number_of_days_from_office"
        v-model="data.number_of_days_from_office"
        value="0"
        label="0"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        v-model="data.number_of_days_from_office"
        name="number_of_days_from_office"
        value="1"
        label="1"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        name="number_of_days_from_office"
        v-model="data.number_of_days_from_office"
        value="2"
        label="2"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        name="number_of_days_from_office"
        v-model="data.number_of_days_from_office"
        value="3"
        label="3"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        name="number_of_days_from_office"
        v-model="data.number_of_days_from_office"
        value="4"
        label="4"
        rules="required"
      />
      <InputRadio
        type="radio"
        as="input"
        name="number_of_days_from_office"
        v-model="data.number_of_days_from_office"
        value="5"
        label="5"
        rules="required"
      />
      <ErrorMessage name="number_of_days_from_office" />
    </div>
  </div>
</template>
<script>
import { ErrorMessage } from 'vee-validate'
import InputRadio from './ui/InputRadio.vue'
export default {
  components: {
    InputRadio,
    ErrorMessage
  },
  data() {
    return {
      paragraph1:
        'რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის',
      paragraph2:
        ' პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.',
      NonFormalMeetings:
        'რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*',
      WorkingInOffice: 'კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
    }
  },

  computed: {
    data: {
      get() {
        return this.$store.getters['AdvicesModel/AdvicesData']
      },
      set(value, name) {
        this.$store.dispatch('AdvicesModel/updateAdvicesData', value, name)
      }
    }
  }
}
</script>
