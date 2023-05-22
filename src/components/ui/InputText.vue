<template>
  <div class="flex flex-col">
    <label class="mt-[47px] mb-[20px] font-bold text-[20px]" :for="name">{{ label }}</label>
    <Field
      class="w-[513px] h-[50px] border border-black bg-transparent pl-4"
      :as="as"
      :id="name"
      :value="value"
      @input="updateValue($event.target.value, name)"
      :name="name"
      :rules="rules"
      :placeholder="placeholder"
      :attrs="attrs"
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
    as: String,
    name: String,
    label: String,
    value: [String, Number],
    placeholder:String,
    attrs: Object,
    rules:Boolean,
    type:String
  },
  methods: {
    updateValue(value, name) {
      this.$emit('input', value, name);
     
  },}

}
</script>