import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { configHtmlPlugin } from './plugin/html';
import { configUnoPlugin } from './plugin/uno';
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx(), vueSetupExtend(), configUnoPlugin()];

  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  return vitePlugins;
}
