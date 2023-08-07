import { defineStore } from 'pinia';
import { Storage } from '/@/utils/storage';
import { StorageEnum } from '/@/enums/storageEnum';
import { defAppConfig } from '/@/settings/designSetting';
import { LocalAppConfig } from '/#/storage';
import { store } from '/@/store';
import { assign } from 'lodash-es';
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

interface AppState {
  appConfig: LocalAppConfig;
  themeToken: ThemeConfig['token'];
}

/* 缓存主题配置 */
const themeToken = Storage.getLocal<AppState['themeToken']>(StorageEnum.THEME_TOKEN) || { colorPrimary: '#1890ff' };

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    appConfig: {
      ...defAppConfig,
    },
    themeToken,
  }),
  getters: {
    getAppConfig(): LocalAppConfig {
      return this.appConfig;
    },
  },
  actions: {
    /* APP 配置 */
    setTheme(theme: Partial<LocalAppConfig>) {
      Object.keys(theme).map((key) => {
        this.appConfig[key] = theme[key];
      });
      Storage.setLocal(StorageEnum.APP_CONFIG, this.appConfig);
    },
    /* 主题颜色配置 */
    setThemeToken(token: ThemeConfig['token']) {
      assign(this.themeToken, token);
      Storage.setLocal(StorageEnum.THEME_TOKEN, this.themeToken);
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
