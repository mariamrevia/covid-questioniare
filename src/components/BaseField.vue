<template>
  <div class="flex flex-col">
    <label class="mt-3 h-2.5 font-bold text-22" :for="name">{{ label }}</label>
    <Field
      class="w-32 h-3 border border-black bg-transparent pl-4"
      :as="as"
      :id="name"
      :value="value"
      @input="updateValue($event.target.value, name)"
      :name="name"
      :rules="rules"
      v-bind="attrs"
    />
    <ErrorMessage class="text-red" :name="name"></ErrorMessage>
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'

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
    attrs: Object,
    rules: Boolean
  },
  methods: {
    updateValue(value, name) {
      this.$emit('input', value, name)
      console.log(value)
    }
  }
}
</script>
