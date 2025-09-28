<template>
  <div>
    <h1>我是一级路由-展示登录成功后的数据</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user';

const userStore = useUserStore();

onMounted(() => {
  userStore.userInfo();
})
</script>

<style scoped></style>
