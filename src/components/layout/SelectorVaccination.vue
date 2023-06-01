<template>
  <div class="flex flex-col w-32 mt-2.75">
    <p for="name" class="font-bold mb-1.5 text-22">{{ labelText }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
