<template>
    <div class="flex flex-row align-middle items-center h-[40px]">
      <Field v-slot="{ field }" :name="name" :rules="rules" :value="modelValue">
        <input
          class="w-1.4 h-1.2 accent-black"
          :type="type"
          v-bind="field"
          :id="id"
          @input="updateValue($event.target.value, name)"
          :value="value"
          :attrs="attrs"
          :checked="isChecked"
        />
      </Field>
  
      <label for="name" class="flex text-[15px] items-center mb-1 ml-[18px] align-middle h-[26px]">{{ label }}</label>
    </div>
  </template>
  
  <script>
  import { Field } from 'vee-validate'
  
  export default {
    components: {
      Field,
    },
    props: {
      name: String,
      label: String,
      value: [String, Number],
      type: String,
      attrs: Object,
      id: String,
      modelValue: String,
      rules: Boolean,
    },
    emits: [
      'update:modelValue'
    ],
    methods: {
      updateValue(value, name) {
        this.$emit('update:modelValue', value,name)
      }
    },
    computed: {
      isChecked() {
        return this.value === this.modelValue
      }
    }
  }
  </script>