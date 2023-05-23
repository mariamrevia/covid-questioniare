<template>
  <div class="mb-20">
    <p class="w-32">{{ paragraph1 }}</p>
    <br />
    <p class="w-32">{{ paragraph2 }}</p>
    <Advices-Form>
     <AdvicesQuestion/>
      <div class="w-32 flex flex-col">
        <p class="font-bold text-22 mt-3 mb-2">{{ OpinionAboutMeeting }}</p>
        <textarea
          class="bg-transparent border-[0.8px] outline-none h-[184px] border-black mt-[20px]"
          name="what_about_meetings_in_live"
          @input="updateValue"
        ></textarea>
        <p class="font-bold mb-2 whitespace-break-spaces text-22 mt-3">
          {{ OpiniionAboutEnviroment }}
        </p>
        <textarea
          class="bg-transparent border-[0.8px] outline-none h-[184px] border-black mt-[20px]"
          name="what_about_meetings_in_live"
          @input="updateValue"
        ></textarea>
      </div>
      <div class="flex flex-row justify-end">
        <button
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
      OpiniionAboutEnviroment:'რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'

    }
  }
}
</script>
