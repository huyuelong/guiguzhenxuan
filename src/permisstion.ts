import router from '@/router';
// @ts-expect-error: 忽略类型检查错误
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// 全局前置守卫
router.beforeEach((to, from, next) => { 
    nprogress.start();
    next();
});

// 全局后置守卫
router.afterEach((to, from) => { 
    nprogress.done();
});
