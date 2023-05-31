<template>
  <div class="flex flex-col mt-343 align-middle items-center">
    <transition appear name="logo-transition" @after-enter="showTextAfterLogoAnimation">
      <div class="big-logo-container">
        <IconLogo />
      </div>
    </transition>
    <transition name="nested">
      <div v-show="showText" class="w-11 flex-wrap text-center with-shadow">
        <router-link to="identification">
          <div class="container">
            <p class="flex items-center justify-center mt-101 text-30 font-bold from-neutral-700">
              <img :src="startingPageText1" class="relative" />
              <img :src="startingPageText2" class="hover:opacity-100 absolute opacity-0" />
            </p>
          </div>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import IconLogo from '@/components/icons/IconLogo.vue'
import startingPageText2 from '@/assets/images/startingPageText2.png'
import startingPageText1 from '@/assets/images/startingPageText1.png'
export default {
  components: {
    IconLogo
  },
  data() {
    return {
      showText: false,
      startingPageText2,
      startingPageText1
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
