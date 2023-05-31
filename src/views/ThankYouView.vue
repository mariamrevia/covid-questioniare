<template>
  <div class="w-120 h-67.5 items-center justify-center flex flex-col bg-black">
    <transition name="bigStar" appear>
      <img :src="bigStar" class="top-26.5 absolute left-49.24" />
    </transition>
    <h2 class="tracking-widest proportional-nums text-white font-semibold text-4">მადლობა</h2>
    <transition name="littleStar" appear>
      <img :src="littleStar" class="top-36.25 absolute right-51" />
    </transition>
  </div>
</template>

<script>
import littleStar from '@/assets/images/littleStar.png'
import bigStar from '@/assets/images/bigStar.png'

export default {
  data() {
    return {
      bigStar,
      littleStar
    }
  }
}
</script>


