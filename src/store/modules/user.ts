import { defineStore } from "pinia";
import { reqLogin, reqUserInfo } from "@/apis/user";
import { ref } from "vue";
import type { loginFormData, loginResponseData, userInfoReponseData } from "@/apis/user/type";
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from "@/utils/token";
import { constantRoutes } from "@/router/routes";
import type { RouteRecordRaw } from "vue-router";

const useUserStore = defineStore("user", () => {
    const token = ref<string>(GET_TOKEN() || "");
    const menuRoutes = ref<RouteRecordRaw[]>(constantRoutes);
    const username = ref<string>("");
  const avatar = ref<string>("");
  const buttons = ref<string[]>([]);

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
            return Promise.reject(new Error(res.message));
        }
    };

    const userInfo = async () => {
        // const res = await reqUserInfo();
        const result: userInfoReponseData = {
                code: 200,
                message: 'ok',
                ok: true,
                data: {
                    routes: [],
                    buttons: [],
                    roles: [],
                    name: 'admin',
                    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                }
            }
            //如果获取用户信息成功，存储一下用户信息
            if (result.code == 200) {
                username.value = result.data.name;
                avatar.value = result.data.avatar;
                buttons.value = result.data.buttons;
                //计算当前用户需要展示的异步路由
                // let userAsyncRoute = filterAsyncRoute(cloneDeep(asnycRoute), result.data.routes);
                // const userAsyncRoute = asnycRoute;
                //菜单需要的数据整理完毕
                // menuRoutes.value = [...constantRoute, ...userAsyncRoute, anyRoute];
                //目前路由器管理的只有常量路由:用户计算完毕异步路由、任意路由动态追加
                // [...userAsyncRoute, anyRoute].forEach((route: any) => {
                //     router.addRoute(route);
                // });
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message));
            }
    }

    const userLogout = () => { 
        token.value = "";
        username.value = "";
        avatar.value = "";
        REMOVE_TOKEN();
    }

    return {
        token,
        menuRoutes,
        username,
        avatar,
        buttons,
        userLogin,
        userInfo,
        userLogout
    };
});

export default useUserStore;
