import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import '/@/design/index.scss';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupRouterGuard(router);
  app.mount('#app');
}

bootstrap();
