<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { Layout } from 'ant-design-vue';
  import PageLayout from '/@/layouts/page/index.vue';
  export default defineComponent({
    setup() {
      const collapsed = ref();
      return () => (
        <Layout class="default-layout">
          <Layout.Sider v-model:collapsed={collapsed.value} trigger={null} collapsible>
            <div class="logo"></div>
          </Layout.Sider>
          <Layout>
            <Layout.Header>222</Layout.Header>
            <Layout.Content>
              <PageLayout></PageLayout>
            </Layout.Content>
          </Layout>
        </Layout>
      );
    },
  });
</script>
<style lang="less" scoped>
  .default-layout {
    display: flex;
    width: 100%;
    min-height: 100%;
  }
</style>
