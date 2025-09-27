<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Logo />
            <!-- 展示菜单 -->
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单组件 -->
                <el-menu :default-active="route.path" background-color="$base-menu-background" text-color="white"
                    active-text-color="yellowgreen" :collapse="isCollapse" collapse-transition>
                    <Menu :menuList="userStore.menuRoutes" />
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Tabbar />
        </div>
        <!-- 内容展示区域 -->
        <div class="layout_main" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Main />
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import useUserStore from '@/store/modules/user';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue';
import { useRoute } from 'vue-router';
import useLayoutSettingStore from '@/store/modules/setting';
import { computed, defineOptions } from 'vue';

defineOptions({
    name: 'Layout'
})

const userStore = useUserStore();
const route = useRoute();
const layoutSettingStore = useLayoutSettingStore();

const isCollapse = computed(() => layoutSettingStore.fold);
</script>

<style scoped lang="scss">
.layout_container {
    width: 100vw;
    height: 100vh;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;
        float: left;
        transition: all 0.3s ease;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100vw - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s ease;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100vw - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        top: $base-tabbar-height;
        left: $base-menu-width;
        background-color: green;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s ease;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>