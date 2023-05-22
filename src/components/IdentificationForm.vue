<template>
  <CustomForm @submit="onSubmit">
    <InputText
      as="input"
      id="first_name"
      name="first_name"
      @input="updateValue"
      :value="IdentificationData.first_name"
      label="სახელი"
      rules="required|minLength|alphabet"
    />
    <InputText
      as="input"
      name="last_name"
      id="last_name"
      label="გვარი"
      @input="updateValue"
      :value="IdentificationData.last_name"
      rules="required|minLength|alphabet"
    />

    <InputText
      as="input"
      name="email"
      label="მეილი"
      @input="updateValue"
      id="email"
      :value="IdentificationData.email"
      rules="required|email"
    />

    <button class="absolute top-59 right-55 z-10">
      <img :src="navigationButton" />
    </button>

    <div class="h-[111px] w-[365px] mt-[111px]">
      <hr class="w-[237px] h-[2px] bg-black mb-[20px]" />
      <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
    </div>
  </CustomForm>
</template>

<script>
import InputText from './ui/InputText.vue'
import { Form } from 'vee-validate'
import { mapGetters } from 'vuex'
import navigationButton from '../assets/images/Vector 2.png'
export default {
  components: {
    CustomForm: Form,
    InputText
  },

  data() {
    return {
      navigationButton
    }
  },
  computed: {
    ...mapGetters('IdentificationModel', ['IdentificationData'])
  },
 
  methods: {
    updateValue(value, name) {
      this.$store.dispatch('IdentificationModel/updateIdentificationtData', { value, name })
    },

    onSubmit() {
      this.$router.push('/covidquestion')
    }
  }
}
</script>
