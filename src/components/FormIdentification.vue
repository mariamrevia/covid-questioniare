<template>
  <IdentificationForm @submit="onSubmit">
    <InputText
      as="input"
      id="first_name"
      name="first_name"
      @input="updateValue"
      :value="identificationData.first_name"
      label="სახელი*"
      rules="required|minLength|alphabet"
    />
    <InputText
      as="input"
      name="last_name"
      id="last_name"
      label="გვარი*"
      @input="updateValue"
      :value="identificationData.last_name"
      rules="required|minLength|alphabet"
    />

    <InputText
      as="input"
      name="email"
      label="მეილი*"
      @input="updateValue"
      id="email"
      :value="identificationData.email"
      rules="required|email"
    />

    <button class="absolute top-59 right-55 z-10">
      <img :src="navigationButton" />
    </button>

    <div class="h-[111px] w-[365px] mt-[111px]">
      <hr class="w-[237px] h-[2px] bg-black mb-[20px]" />
      <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
    </div>
  </IdentificationForm>
</template>

<script>
import InputText from './ui/InputText.vue'
import { Form } from 'vee-validate'
import { mapGetters } from 'vuex'
import navigationButton from '@/assets/images/Vector2.png'
export default {
  components: {
    IdentificationForm: Form,
    InputText
  },

  data() {
    return {
      navigationButton
    }
  },
  computed: {
    ...mapGetters('IdentificationModel', ['identificationData'])
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
