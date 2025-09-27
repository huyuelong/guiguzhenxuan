import { defineStore } from "pinia";
import { reqLogin } from "@/apis/user";
import { ref } from "vue";
import type { loginFormData, loginResponseData } from "@/apis/user/type";
import { GET_TOKEN, SET_TOKEN } from "@/utils/token";
import { constantRoutes } from "@/router/routes";
import type { RouteRecordRaw } from "vue-router";

const useUserStore = defineStore("user", () => {
    const token = ref<string>(GET_TOKEN() || "")
    const menuRoutes = ref<RouteRecordRaw[]>(constantRoutes)

    const userLogin = async (data: loginFormData) => {
        // const res = await reqLogin(data);
        const res = <loginResponseData>{
                code: 200,
                message: 'ok',
                ok: true,
                data: '123'
            }
        if (res.code === 200) {
            token.value = res.data;
            SET_TOKEN(token.value);
            return "ok";
        } else {
            return Promise.reject(new Error(res.data));
        }
    };

    return {
        token,
        menuRoutes,
        userLogin,
    };
});

export default useUserStore;
