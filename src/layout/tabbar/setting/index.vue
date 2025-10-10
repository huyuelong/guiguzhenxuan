<template>
    <div class="setting">
        <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
        <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>

        <!-- 齿轮按钮：打开抽屉 -->
        <el-button size="small" icon="Setting" circle @click="drawerVisible = true"></el-button>

        <!-- 抽屉：主题设置 -->
        <el-drawer v-model="drawerVisible" append-to-body title="主题设置" direction="rtl" size="300px">
            <el-form label-width="80px">
                <el-form-item label="主题颜色">
                    <el-color-picker @change="setColor" v-model="color" size="small" show-alpha
                        :predefine="predefineColors" />
                </el-form-item>
                <el-form-item label="暗黑模式">
                    <el-switch @change="changeDark" v-model="dark" class="mt-2" inline-prompt active-icon="MoonNight"
                        inactive-icon="Sunny" />
                </el-form-item>
            </el-form>
        </el-drawer>

        <!-- 用户信息 -->
        <img :src="userStore.avatar" style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%;" />
        <el-dropdown>
            <span>
                {{ userStore.username }}
                <el-icon><arrow-down /></el-icon>
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
import { ref } from 'vue';
import useLayoutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';

defineOptions({
    name: 'Setting'
});

const layoutSettingStore = useLayoutSettingStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const drawerVisible = ref(false); // 👈 抽屉开关
const dark = ref<boolean>(false);

// 刷新按钮
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh;
};

// 全屏切换
const fullScreen = () => {
    const full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};

// 退出登录
const logout = async () => {
    await userStore.userLogout();
    router.push({
        path: '/login',
        query: { redirect: route.path },
    });
};

// 颜色组件的数据
const color = ref('rgba(255, 69, 0, 0.68)');
const predefineColors = ref([
    '#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1',
    '#1e90ff', '#c71585', 'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)', 'hsla(209, 100%, 56%, 0.73)', '#c7158577'
]);

// 暗黑模式切换
const changeDark = () => {
    const html = document.documentElement;
    html.className = dark.value ? 'dark' : '';
};

// 主题颜色设置
const setColor = () => {
    const html = document.documentElement;
    html.style.setProperty('--el-color-primary', color.value);
};
</script>

<style scoped lang="scss">
.setting {
    display: flex;
    align-items: center;
}

.mt-2 {
    margin-top: 8px;
}
</style>
