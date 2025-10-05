<template>
    <el-card>
        <el-form :inline="true" :model="{}" class="demo-form-inline">
            <el-form-item label="一级分类">
                <el-select placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
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