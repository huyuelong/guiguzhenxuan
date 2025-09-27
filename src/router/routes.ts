// 常量路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: { title: '登录', isHidden: true, icon: 'Promotion' },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'Layout',
    redirect: '/home',
    meta: { title: 'layout', isHidden: false, icon: 'Avatar' },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', isHidden: false, icon: 'HomeFilled' },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: { title: '数据大屏', isHidden: false, icon: 'Platform' },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    redirect: '/acl/user',
    meta: { title: '权限管理', isHidden: false, icon: 'Lock' },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: { title: '用户管理', isHidden: false, icon: 'User' },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: '/acl/Role',
        meta: { title: '角色管理', isHidden: false, icon: 'UserFilled' },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: { title: '菜单管理', isHidden: false, icon: 'Monitor' },
      },
    ]
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    redirect: '/product/trademark',
    meta: { title: '商品管理', isHidden: false, icon: 'Goods' },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: { title: '品牌管理', isHidden: false, icon: 'ShoppingCartFull' },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: { title: '属性管理', isHidden: false, icon: 'ChromeFilled' },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: { title: 'SPU管理', isHidden: false, icon: 'Calendar' },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: { title: 'SKU管理', isHidden: false, icon: 'Orange' },
      },
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: { title: '404', isHidden: true, icon: 'DocumentDelete' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'NotFound',
    meta: { title: '任意', isHidden: true, icon: 'DataLine' },
  },
];
