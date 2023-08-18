import { createSSRApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import { setupStore } from '/@/store/';
export function createApp() {
  const app = createSSRApp(App);
  // 状态管理配置
  setupStore(app);

  return {
    app,
  };
}
