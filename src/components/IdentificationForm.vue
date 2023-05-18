<template>
    <CustomForm  @submit="onSubmit">
  <BaseField  v-for="{ as, name, label,rules, value, ...attrs } in schema.fields"
        :key="name"
        :as="as"
        :name="name"
        :label="label"
        :value="value"
        :rules="rules"
        v-bind="attrs"
        @input="updateValue" />
      
          <button type='submit' class="absolute top-59 right-55 z-10">
            <img :src="navigationButton"/>
          </button>
       
      <div class="h-7 w-29 mt-7">
        <hr class="w-15 h-[2px] bg-black mb-1.25"/>
        <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
      </div>
    </CustomForm>
  
  </template>
  
  <script>
  import BaseField from "./BaseField.vue"
  import { mapState, mapActions } from 'vuex'
  import { Form } from 'vee-validate'
  import navigationButton from "../assets/images/Vector 2.png"
  export default {
    components: {
      CustomForm: Form,
      BaseField
    },
    props: {
      schema: {
        type: Object,
        required: true
      }
    },
  
    data() {
      return {
        navigationButton
      }
    },
    computed: {
      ...mapState(['formData'])
    },
    methods: {
      ...mapActions(['updateFormData']),
      updateValue(value, name) {
        this.updateFormData({
          field: name,
          value: value
        });
      },
      onSubmit() {
      this.$router.replace('/covidquestion')
      },
    }   
    }
  
  
</script>  