import { createRouter } from 'uni-mini-router';
import { App } from 'vue';

const router = createRouter({
  routes: [...ROUTES], // 路由表信息
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export { router };
