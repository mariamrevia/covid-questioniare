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

<style>
.bigStar-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.4s;
}

.bigStar-enter-from {
  transform: scale(0);
  transform: translate(80%, 180%);
  opacity: 0;
}
.bigStar-enter-to {
  transform: scale(1);
  transform: translateX(0%);
  opacity: 1;
}

.littleStar-enter-active {
  transition: opacity 0.5s, transform 0.4s;
}

.littleStar-enter-from {
  transform: scale(0);
  transform: translate(-80%, -160%);
  opacity: 0;
}

.littleStar-enter-to {
  transform: scale(1);
  transform: translateX(0%);
  opacity: 1;
}
</style>
