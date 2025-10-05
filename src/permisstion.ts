import router from '@/router';
// @ts-expect-error: 忽略类型检查错误
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import useUserStore from '@/store/modules/user';
import pinia from '@/store';
import setting from './setting';

nprogress.configure({ showSpinner: false });

const userStore = useUserStore(pinia);

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    document.title = `${setting.title} - ${to.meta.title}`;
    nprogress.start();

    const token = userStore.token;
    const username = userStore.username;

    if (token) {
        // 已登录还去登录页 → 回首页
        if (to.path === '/login') {
            next('/');
            return;
        }

        // 已登录但没获取用户信息
        if (!username) {
            try {
                await userStore.userInfo();
                next(); // 成功后放行
            } catch (error) {
                // token 过期或用户信息获取失败 → 退出重新登录
                await userStore.userLogout();
                next(`/login?redirect=${to.path}`);
            }
        } else {
            next(); // ✅ 用户信息已有，直接放行
        }
    } else {
        // 未登录
        if (to.path === '/login') {
            next(); // 允许去登录页
        } else {
            next(`/login?redirect=${to.path}`); // 跳转登录页
        }
    }
});

// 全局后置守卫
router.afterEach(() => {
    nprogress.done();
});
