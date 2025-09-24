<template>
    <div class="login-container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input :prefix-icon="Lock" v-model="loginForm.password" show-password type="password"
                            placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock, Loading } from '@element-plus/icons-vue';
import { ref } from 'vue';
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';

const userStore = useUserStore();
const router = useRouter();

const loading = ref(false)

const loginForm = ref({
    username: 'admin',
    password: '111111',
});

const login = async () => {
    loading.value = true;
    try {
        await userStore.userLogin(loginForm.value);
        router.push('/');
        ElNotification.success({
            title: '登录成功',
            message: '欢迎来到硅谷甄选',
        });
        loading.value = false;
    } catch (error) {
        loading.value = false;
        ElNotification.error({
            title: '登录失败',
            message: (error as Error).message,
        });
    }
}
</script>

<style scoped lang="scss">
.login-container {
    width: 100vw;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-size: 20px;
            margin: 20px 0;
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>
