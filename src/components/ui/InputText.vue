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
    required: true,
    default:'',
  },
  name: {
    type: String,
    required: true,
    default:'',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  value: {
    type: [String, Number],
    required: true,
    default: null,
  },
  placeholder: {
    type: String,
    default: ''
  },
  rules: {
    type: Boolean,
    required:false,
    default: false
  },
  type: {
    type: String,
    required:false,
    default: '',
  }
},
  methods: {
    updateValue(value, name) {
      this.$emit('input', value, name);
     
  },}

}
</script>