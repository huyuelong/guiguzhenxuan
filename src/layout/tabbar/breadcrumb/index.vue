<template>
    <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';

const layoutSettingStore = useLayoutSettingStore();

defineOptions({
    name: 'Breadcrumb',
});

// 切换折叠图标
const changeIcon = () => {
    layoutSettingStore.fold = !layoutSettingStore.fold;
};
</script>

<style scoped></style>