<template>
    <div>
        <el-card class="box-card">
            <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
            <!-- 表格组件 -->
            <el-table style="margin: 10px 0px;" border :data="trademarkList">
                <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
                <el-table-column label="品牌名称">
                    <template #="{ row, $index }">
                        <pre style="color:blanchedalmond">{{ row.tmName! }}</pre>
                    </template>
                </el-table-column>
                <el-table-column label="品牌LOGO">
                    <template #="{ row, $index }">
                        <img :src="row.logoUrl" alt="未有图片" style="width:100px;height: 100px;">
                    </template>
                </el-table-column>
                <el-table-column label="品牌操作">
                    <template #="{ row, $index }">
                        <el-button type="primary" size="small" icon="Edit" @click="updateTrademark(row)"></el-button>
                        <el-popconfirm :title="`您确定要删除${row.tmName}?`" width="250px" icon="Delete"
                            @confirm='removeTradeMark(row.id)'>
                            <template #reference>
                                <el-button type="primary" size="small" icon="Delete"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页器组件 -->
            <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="sizes" :size="size"
                :disabled="disabled" :background="background" layout="prev, pager, next, jumper, ->, sizes, total"
                :total="total" @size-change="handleSizeChange" @current-change="getTrademarkList" />
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqHasTrademark, reqAddOrUpdateTrademark, reqDeleteTrademark } from '@/apis/product/trademark/index';
import { TradeMarkResponseData } from '@/apis/product/trademark/type';

const pageNo = ref<number>(1);
const pageSize = ref<number>(10);
const sizes = ref<number[]>([10, 20, 30, 40]);
const size = ref<string>('large');
const disabled = ref<boolean>(false);
const background = ref<boolean>(true);
const total = ref<number>(0);
const trademarkList = ref<any[]>([]);

const getTrademarkList = async (pager = 1) => {
    pageNo.value = pager;
    const res: TradeMarkResponseData = await reqHasTrademark(pageNo.value, pageSize.value);
    if (res.code === 200) {
        total.value = res.data.total;
        trademarkList.value = res.data.records;
    }
};

onMounted(() => {
    getTrademarkList();
});

const handleSizeChange = (val: number) => {
    console.log(val);
    getTrademarkList();
};

</script>

<style scoped></style>