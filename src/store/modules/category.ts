// 商品分类全局组件的小仓库（组合式写法）
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { reqC1, reqC2, reqC3 } from '@/apis/product/attr';
import type { CategoryResponseData, CategoryObj } from '@/apis/product/attr/type';

export const useCategoryStore = defineStore('Category', () => {

    const c1Arr = ref<CategoryObj[]>([]);   // 一级分类数组
    const c1Id = ref<string>('');           // 一级分类ID
    const c2Arr = ref<CategoryObj[]>([]);   // 二级分类数组
    const c2Id = ref<string>('');           // 二级分类ID
    const c3Arr = ref<CategoryObj[]>([]);   // 三级分类数组
    const c3Id = ref<string>('');           // 三级分类ID

    // 获取一级分类
    const getC1 = async () => {
        const result: CategoryResponseData = await reqC1()
        if (result.code === 200) {
            c1Arr.value = result.data;
        }
    }

    // 获取二级分类
    const getC2 = async () => {
        const result: CategoryResponseData = await reqC2(c1Id.value)
        if (result.code === 200) {
            c2Arr.value = result.data;
        }
    }

    // 获取三级分类
    const getC3 = async () => {
        const result: CategoryResponseData = await reqC3(c2Id.value)
        if (result.code === 200) {
            c3Arr.value = result.data;
        }
    }

    return {
        c1Arr, c1Id,
        c2Arr, c2Id,
        c3Arr, c3Id,
        getC1, getC2, getC3,
    }
})
