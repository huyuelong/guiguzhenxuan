<template>
    <div class="setting">
        <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
    <el-button size="small" icon="Setting" circle></el-button>
    <img :src="userStore.avatar" style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%;">
    <el-dropdown>
        <span>
            {{ userStore.username }}
            <el-icon>
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
import { nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';

defineOptions({
    name: 'Setting'
})

const layoutSettingStore = useLayoutSettingStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh;
}

const fullScreen = () => {
    const full = document.fullscreenElement; // 判断是否全屏
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

const logout = () => {
    userStore.userLogout();
    nextTick(() => {
        router.push({
            path: '/login',
            query: {
                redirect: route.path
            }
        });
    })
}
</script>

<style scoped lang="scss">
.setting { 
    display: flex;
    align-items: center;
}
</style>