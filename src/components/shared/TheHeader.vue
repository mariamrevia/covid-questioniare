<template>
  <div class="pl-200 pr-200 h-6 flex flex-col justify-center mt-89">
    <div class="flex flex-row justify-between items-center">
      <IconName />
      <span class="text-2.5 items-center font-medium"> {{ currentPage }} /4 </span>
    </div>

    <hr class="w-95 bg-black mt-1.4 h-0.1" />
  </div>
</template>

<script>
import IconName from '@/components/icons/IconName.vue'
export default {
  components: {
    IconName
  },
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: null
    }
  }
}
</script>
