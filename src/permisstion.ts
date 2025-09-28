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
        //已经登录成功
        if (to.path === '/login') {
            //如果已经登录还想去登录页，跳转到首页
            next('/');
        } else {
            //去的不是登录页，有token，放行
            next();
            if (username) {
                next();
            } else { 
                try {
                    await userStore.userInfo();
                    next();
                } catch (error) {
                    await userStore.userLogout();
                    next(`/login?redirect=${to.path}`);
                }
            }
        }
    } else {
        //未登录
        if (to.path === '/login') {
            //去登录页，放行
            next();
        } else {
            //去的不是登录页，跳转到登录页
            next(`/login?redirect=${to.path}`);
        }
    }
});

// 全局后置守卫
router.afterEach((to, from) => {
    nprogress.done();
});
