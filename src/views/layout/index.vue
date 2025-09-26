<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo />
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar">456</div>
        <!-- 内容展示区域 -->
        <div class="layout_main">
            <div style="height: 10000px; background-color: red;">789</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'

</script>

<style scoped lang="scss">
.layout_container {
    width: 100vw;
    height: 100vh;
    background-color: red;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;
        float: left;
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100vw - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menu-width;
        background-color: cyan;
    }

    .layout_main {
        position: absolute;
        width: calc(100vw - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        top: $base-tabbar-height;
        left: $base-menu-width;
        background-color: yellow;
        padding: 20px;
        overflow: auto;
    }
}
</style>