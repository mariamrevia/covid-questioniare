<template>
  <IdentificationForm @submit="onSubmit">
    <InputText
      as="input"
      id="first_name"
      name="first_name"
      @input="updateValue"
      :value="identificationData.first_name"
      label="სახელი*"
      placeholder="იოსებ"
      rules="required|minLength|alphabet"
    />
    <InputText
      as="input"
      name="last_name"
      id="last_name"
      label="გვარი*"
      placeholder="ჯუღაშვილი"
      @input="updateValue"
      :value="identificationData.last_name"
      rules="required|minLength|alphabet"
    />

    <InputText
      as="input"
      name="email"
      label="მეილი*"
      @input="updateValue"
      placeholder="fbi.redberry.ge"
      id="email"
      :value="identificationData.email"
      rules="required|email"
    />

    <button class="absolute top-59 right-55 z-10">
      <img :src="directionForward" />
    </button>

    <div class="h-7 w-22 mt-7">
      <hr class="w-15 h-0.1 bg-black mb-1.5" />
      <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
    </div>
  </IdentificationForm>
</template>

<script>
import InputText from '@/components/ui/InputText.vue'
import { Form } from 'vee-validate'
import { mapGetters } from 'vuex'
import directionForward from '@/assets/images/directionForward.png'
export default {
  components: {
    IdentificationForm: Form,
    InputText
  },

  data() {
    return {
      directionForward
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
      this.$router.push('covidQuestion')
    }
  }
}
</script>
