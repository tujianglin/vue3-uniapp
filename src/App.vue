<script lang="tsx">
  import { defineComponent } from 'vue';
  import { RouterView } from 'vue-router';
  import { ConfigProvider } from 'ant-design-vue';
  import 'dayjs/locale/zh-cn';
  import { useLocale } from '/@/locales/useLocale';
  import { useAppStore } from '/@/store/modules/app';
  export default defineComponent({
    setup() {
      const { getAntdLocale } = useLocale();
      const { themeToken } = useAppStore();
      return () => (
        <ConfigProvider
          locale={getAntdLocale.value}
          theme={{
            token: themeToken,
          }}
        >
          <RouterView></RouterView>
        </ConfigProvider>
      );
    },
  });
</script>
<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>
