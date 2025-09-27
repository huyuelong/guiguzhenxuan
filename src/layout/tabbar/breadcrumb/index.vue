<template>
    <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon v-if="item.meta.icon" style="vertical-align: top; margin: 0px 2px;">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
import { useRoute } from 'vue-router';

const layoutSettingStore = useLayoutSettingStore();
const route = useRoute();

defineOptions({
    name: 'Breadcrumb',
});

// 切换折叠图标
const changeIcon = () => {
    layoutSettingStore.fold = !layoutSettingStore.fold;
};

const handle = () => {
    console.log(route.matched);
};
</script>

<style scoped></style>