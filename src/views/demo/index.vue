<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Button } from 'ant-design-vue';
  export default defineComponent({
    setup() {
      return () => (
        <div>
          <Button type={'primary'}>111</Button>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
