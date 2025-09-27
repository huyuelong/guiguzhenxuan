<template>
    <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button size="small" icon="FullScreen" circle></el-button>
    <el-button size="small" icon="Setting" circle></el-button>
    <img src="/public/logo.png" style="width: 24px; height: 24px; margin: 0px 10px;">
    <el-dropdown>
        <span>
            admin
            <el-icon>
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';

defineOptions({
    name: 'Setting'
})

const layoutSettingStore = useLayoutSettingStore();
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh;
}

</script>

<style scoped></style>