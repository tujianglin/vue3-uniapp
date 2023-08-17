import { createSSRApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import { setupRouter } from '/@/router';
import { setupStore } from '/@/store/';
export function createApp() {
  const app = createSSRApp(App);
  // 状态管理配置
  setupStore(app);
  // 路由配置
  setupRouter(app);

  return {
    app,
  };
}
