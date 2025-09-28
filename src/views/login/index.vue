<template>
    <div class="login-container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item lable="用户名" prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item lable="密码" prop="password">
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
import { User, Lock } from '@element-plus/icons-vue';
import { ref } from 'vue';
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const loginForms = ref();
const route = useRoute();

const loading = ref(false)
const loginForm = ref({
    username: 'admin',
    password: '111111',
});

const login = async () => {
    await loginForms.value.validate();
    loading.value = true;
    try {
        await userStore.userLogin(loginForm.value);
        const redirect = route.query.redirect as string;
        if (redirect) {
            router.push(redirect);
        } else {
            router.push('/');
        }
        ElNotification.success({
            title: `Hi，${getTime()}`,
            message: '欢迎回来',
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

const validatorUserName = (rule: any, value: any, callback: any) => {
    if (value.length >= 5) {
        callback();
    } else {
        callback(new Error('用户名长度不能小于5位'));
    }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
    if (value.length >= 6) {
        callback();
    } else {
        callback(new Error('密码长度不能小于6位'));
    }
}

const rules = {
    username: [
        { trigger: "change", validator: validatorUserName }
    ],
    password: [
        { trigger: 'change', validator: validatorPassword },
    ],
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
