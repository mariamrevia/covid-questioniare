<template>
  <div class="pl-200 pr-200 h-[95px] flex flex-col justify-center mt-89">
    <div class="flex flex-row justify-between items-center">
      <IconName/>
      <span class="text-[40px] items-center font-medium">
         {{ currentPage }} /4
      </span>

    </div>

    <hr class="w-[1520px] bg-black mt-[23px] h-[1.8px]" />
  </div>
</template>

<script>
import IconName from '../icons/IconName.vue';
export default {
  components:{
    IconName

  },
  props: {
    currentPage: {
      type: Number,
      required: true,
      default:null
    },
   
  }



}

</script>
