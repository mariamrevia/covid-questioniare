<template>
  <p class="font-bold text-22 mt-3 mb-2">{{label}}</p>
  <textarea
    :value="value"
    class="bg-transparent border outline-none h-11 border-black mt-1.25"
    :name="name"
    @input="updateValue($event.target.value, name)"
  ></textarea>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    value: {
      type: String,
      required: true,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    updateValue(value, name) {
      this.$emit('input', value, name)
    }
  }
}
</script>
