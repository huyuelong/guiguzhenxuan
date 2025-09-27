<template>
    <div class="tabbar">
        <div class="tabbar_left">
            <breadcrumb />
        </div>
        <div class="tabbar_right">
            <setting />
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue';
import Setting from './setting/index.vue';

defineOptions({
    name: 'Tabbar'
});
</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-image: linear-gradient(to right, #ffffff, #bfdbfe, #e9d5ff);

    .tabbar_left,
    .tabbar_right {
        display: flex;
        // margin-left: 20px;
    }
}
</style>