<template>
  <div class="flex flex-row align-middle items-center h-2.5">
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

    <label for="name" class="flex text-1 items-center mb-1 ml-1.1 align-middle h-1.6">{{
      label
    }}</label>
  </div>
</template>

<script>
import { Field } from 'vee-validate'

export default {
  components: {
    Field
  },
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: [String, Number],
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: String,
      required: true,
      default: ''
    },
    rules: {
      type: Boolean,
      required: false,
      default: Boolean
    }
  },
  emits: ['update:modelValue' ],
  methods: {
    updateValue(value, name) {
      this.$emit('update:modelValue', value, name)
    }
  },
  computed: {
    isChecked() {
      return this.value === this.modelValue
    }
  }
}
</script>
