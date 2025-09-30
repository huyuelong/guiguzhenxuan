<template>
    <div>
        <el-card class="box-card">
            <el-button type="primary" size="default" icon="Plus" @click="addTrademark">添加品牌</el-button>
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
        <!-- 添加品牌对话框 -->
        <el-dialog v-model="dialogFormVisible" :title="trademarkParams.id ? '修改品牌' : '添加品牌'">
            <el-form style="width: 80%;" :model="trademarkParams" :rules="rules" ref="formRef">
                <el-form-item label="品牌名称" label-width="100px" prop="tmName">
                    <el-input placeholder="请您输入品牌名称" v-model="trademarkParams.tmName"></el-input>
                </el-form-item>
                <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
                    <!-- upload组件属性:action图片上传路径书写/api,代理服务器不发送这次post请求  -->
                    <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>

                </el-form-item>
            </el-form>
            <!-- 具名插槽:footer -->
            <template #footer>
                <el-button type="primary" size="default" @click="cancel">取消</el-button>
                <el-button type="primary" size="default" @click="confirm">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqHasTrademark, reqAddOrUpdateTrademark, reqDeleteTrademark } from '@/apis/product/trademark/index';
import { TradeMark, TradeMarkResponseData } from '@/apis/product/trademark/type';

const pageNo = ref<number>(1);
const pageSize = ref<number>(10);
const sizes = ref<number[]>([10, 20, 30, 40]);
const size = ref<string>('large');
const disabled = ref<boolean>(false);
const background = ref<boolean>(true);
const total = ref<number>(0);
const trademarkList = ref<any[]>([]);
const dialogFormVisible = ref<boolean>(false);

// 获取品牌列表
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

// 分页器:size-change
const handleSizeChange = (val: number) => {
    console.log(val);
    getTrademarkList();
};

// 添加品牌
const addTrademark = () => { 
    dialogFormVisible.value = true;
};

// 修改品牌
const updateTrademark = (row: TradeMark) => {
    dialogFormVisible.value = true;
}

const cancel = () => {
    dialogFormVisible.value = false;
}

const confirm = async () => { 
    dialogFormVisible.value = false;
}

</script>

<style scoped></style>