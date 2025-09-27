<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Main'
})
</script>

<style scoped>
/* 进入前 */
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px); /* 从右边轻轻滑入 */
}

/* 进入时 */
.fade-slide-enter-active {
  transition: all 0.3s ease;
}

/* 进入后 */
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* 离开前 */
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* 离开时 */
.fade-slide-leave-active {
  transition: all 0.3s ease;
  position: absolute; /* 防止路由页面堆叠 */
  width: 100%;
}

/* 离开后 */
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px); /* 向左淡出 */
}
</style>
