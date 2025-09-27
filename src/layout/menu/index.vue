<template>
    <template v-for="item in menuList" :key="item.path">
        <!-- 没有子路由 -->
        <template v-if="!item.children">
            <el-menu-item :index="item.path" v-if="!item.meta.isHidden" @click="goRoute">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有子路由但只有一个 -->
        <template v-else-if="item.children && item.children.length === 1">
            <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.isHidden" @click="goRoute">
                <el-icon>
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有子路由且多个 -->
        <template v-else-if="item.children && item.children.length > 1">
            <el-sub-menu :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <!-- 递归 -->
                <Menu :menuList="item.children"></Menu>
            </el-sub-menu>
        </template>
    </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps(['menuList'])
defineOptions({
    name: 'Menu',
})

const router = useRouter()
const goRoute = (vc: any) => {
    console.log(vc)
    router.push(vc.index)
}
</script>
<script lang="ts">
export default {
    name: 'Menu'
}
</script>

<style scoped></style>