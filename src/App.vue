<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue';

</script>

<template>
  <div>
    <h1>Hello World</h1>
    <!-- <svg style="width: 30px; height: 30px;">
      <use xlink:href="#icon-phone" fill="blue"></use>
    </svg> -->
    <SvgIcon name="phone" color="red" width="30px" height="30px" />
  </div>
</template>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
