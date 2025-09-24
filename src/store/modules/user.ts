import { defineStore } from "pinia";
import { reqLogin } from "@/apis/user";
import type { loginFormData } from "@/apis/user/type";

const useUserStore = defineStore("user", {
    state: () => {
        return {
            token: localStorage.getItem("TOKEN") || "",
        }
    },
    actions: {
        async userLogin(data: loginFormData) {
            const res = await reqLogin(data);
            if (res.code === 200) {
                this.token = res.data.token;
                localStorage.setItem("TOKEN", res.data.token);
                return "ok";
            } else {
                return Promise.reject(new Error("登录失败"));
            }
        }
    },
    getters: {},
})

export default useUserStore;