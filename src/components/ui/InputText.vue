<template>
  <div class="flex flex-col">
    <label class="mt-[47px] mb-[20px] font-bold text-[20px]" :for="name">{{ label }}</label>
    <Field
      class="w-[513px] h-[50px] border border-black bg-transparent pl-4"
      :as="as"
      :value="value"
      @input="updateValue($event.target.value, name)"
      :name="name"
      :rules="rules"
      :placeholder="placeholder"
      :type="type"    
    />
    <ErrorMessage class="text-red" :name="name"></ErrorMessage>
  </div>
</template>
<script>
import { Field,ErrorMessage } from 'vee-validate'
export default {
  components: {
    Field,
    ErrorMessage
  },
  props: {
  as: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    default: null
  },
  placeholder: {
    type: String,
    default: ''
  },
  rules: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: ''
  }
},
  methods: {
    updateValue(value, name) {
      this.$emit('input', value, name);
     
  },}

}
</script>