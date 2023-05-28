<template>
  <div class="flex flex-col mt-343 align-middle items-center">
    <transition appear name="logo-transition" @after-enter="showTextAfterLogoAnimation">
      <div class="big-logo-container">
        <IconLogo />
      </div>
    </transition>
    <transition name="nested">
      <div v-show="showText" class="w-[200px] flex-wrap text-center with-shadow">
        <router-link to="/identification">
          <div class="container">
            <p class="flex items-center justify-center mt-101 text-30 font-bold from-neutral-700">
              <img :src="text1" class="relative hover: ml-1" />
              <img :src="text2" class="hover:opacity-100 absolute top-944 left-50% opacity-0" />
            </p>
          </div>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import IconLogo from '@/components/icons/IconLogo.vue'
import text2 from '@/assets/images/text2.png'
import text1 from '@/assets/images/text.png'
export default {
  components: {
    IconLogo
  },
  data() {
    return {
      message: 'კითხვარის დაწყება',
      showText: false,
      text2,
      text1
    }
  },
  methods: {
    showTextAfterLogoAnimation() {
      setTimeout(() => {
        this.showText = true
      }, 700)
    }
  }
}
</script>

<style>
.logo-transition-enter-active {
  transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
}

.logo-transition-enter-from {
  transform: scale(28);
  opacity: 1;
}

.logo-transition-enter-to {
  transform: scale(1);
  opacity: 1;
}

.nested-enter-active {
  animation: animateDown 1s ease forwards;
  animation-delay: calc(0.1s * var(--char-index));
}

@keyframes animateDown {
  0% {
    transform: translateY(-30%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
