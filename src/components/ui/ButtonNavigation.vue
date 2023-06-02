<template>
  <div>
    <router-link :to="to">
      <img class="absolute top-59 right-63 z-10" :src="directionBack" />
    </router-link>
    <button :disabled="!valid" type="submit" class="absolute top-59 right-55 z-10">
      <img :src="directionForward" />
    </button>
  </div>
</template>
<script>
import directionBack from '@/assets/images/directionBack.png'
import directionForward from '@/assets/images/directionForward.png'
export default {
  data() {
    return {
      directionBack,
      directionForward
    }
  },
  props: {
    to: {
      type: String,
      required: true
    },
    valid:{
      type:Boolean,
      required:false
    }
  }
}
</script>
