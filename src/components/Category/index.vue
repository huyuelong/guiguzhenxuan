<template>
    <el-card>
        <el-form :inline="true" :model="{}" class="demo-form-inline">
            <el-form-item label="一级分类">
                <el-select placeholder="请选择" v-model="categoryStore.c1Id">
                    <!-- label:即为展示数据 value:即为select下拉菜单收集的数据 -->
                    <el-option v-for="(c1, index) in categoryStore.c1Arr" :key="c1.id" :label="c1.name" :value="c1.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类">
                <el-select placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="三级分类">
                <el-select placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCategoryStore } from '@/store/modules/category';

const categoryStore = useCategoryStore();

const getC1 = () => {
    categoryStore.getC1();
}   

onMounted(() => {
    getC1();
})
</script>

<style scoped lang="scss">
.demo-form-inline {
    .el-input {
        --el-input-width: 220px;
    }
    .el-select {
        --el-select-width: 220px;
    }
}
</style>