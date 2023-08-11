import type { AppRouteModule, AppRouteRecordRaw } from '/#/router';
import { PageEnum } from '/@/enums/pageEnum';

/* 获取到模块里的参数 */
const modules = import.meta.glob('./modules/*.ts', { eager: true });
const routeModuleList: AppRouteModule[] = [];

/* 根路由 */
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

/* 登录路由 */
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
};

/* 获取到每个模块的路径 */
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export default [RootRoute, LoginRoute, ...routeModuleList];
