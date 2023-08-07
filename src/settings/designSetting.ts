import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { LocalAppConfig } from '/#/storage';

/* 默认 主题颜色 */
export const colorPrimary = '#1890ff';

/* app 主题颜色列表 */
export const APP_PRESET_COLOR_LIST: string[] = [colorPrimary, '#0084f4', '#009688', '#536dfe', '#ff5c93', '#ee4f12', '#0096c7', '#9c27b0', '#ff9800'];

/* app 默认配置 */
export const defAppConfig: LocalAppConfig = {
  locale: 'zh_CN',
  collapsed: false,
};

/* 主题配置 */
export const defThemeToken: ThemeConfig['token'] = {
  colorPrimary,
  borderRadius: 2,
};
