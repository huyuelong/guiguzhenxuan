import { defineStore } from "pinia";
import { reqLogin } from "@/apis/user";
import { ref } from "vue";
import type { loginFormData } from "@/apis/user/type";
import { GET_TOKEN, SET_TOKEN } from "@/utils/token";

const useUserStore = defineStore("user", () => {
    const token = ref<string>(GET_TOKEN() || "")

    const userLogin = async (data: loginFormData) => {
        const res = await reqLogin(data);
        if (res.code === 200) {
            token.value = res.data.token!;
            SET_TOKEN(token.value);
            return "ok";
        } else {
            return Promise.reject(new Error(res.data.message));
        }
    };

    return {
        token,
        userLogin,
    };
});

export default useUserStore;
