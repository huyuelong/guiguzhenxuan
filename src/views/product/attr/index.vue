<template>
    <div>
        <!-- 三级分类全局组件 -->
        <Category :scene="scene" />
        <el-card style="margin: 10px 0px;">
            <el-button type="primary" icon="Plus" :disabled="categoryStore.c3Id ? false : true">添加属性</el-button>
            <el-table border style="margin: 10px 0px">
                <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
                <el-table-column label="属性名称" width="120px"></el-table-column>
                <el-table-column label="属性值名称"></el-table-column>
                <el-table-column label="操作" width="120px"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCategoryStore } from '@/store/modules/category';

const categoryStore = useCategoryStore();

const scene = ref<number>(0); //scene=0,显示table,scene=1,展示添加与修改属性结构
</script>

<style scoped lang="scss">

</style>