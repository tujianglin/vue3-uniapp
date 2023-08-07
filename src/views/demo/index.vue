<script lang="tsx">
  import { defineComponent, onMounted } from 'vue';
  import { ElButton } from 'element-plus';
  import api from '/@/api';
  export default defineComponent({
    setup() {
      onMounted(() => {
        api.apiScopeDetail().then((res) => {
          console.log(res.data.data);
        });
      });
      return () => (
        <div>
          <ElButton>111</ElButton>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
