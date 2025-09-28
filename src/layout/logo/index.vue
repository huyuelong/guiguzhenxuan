<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="" />
        <!-- 渐隐标题 -->
        <transition name="fade">
            <p v-if="!layoutSettingStore.fold">{{ setting.title }}</p>
        </transition>
    </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
import useLayoutSettingStore from '@/store/modules/setting';

const layoutSettingStore = useLayoutSettingStore();

defineOptions({
    name: 'Logo',
});
</script>

<style scoped lang="scss">
.logo {
    display: flex;
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 20px;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 10px;
        white-space: nowrap;
    }
}

/* 渐隐动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
