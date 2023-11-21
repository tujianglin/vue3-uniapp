<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Repl } from '@vue/repl';
  // @ts-ignore
  import MonacoEditor from '@vue/repl/monaco-editor';
  import '@vue/repl/style.css';
  export default defineComponent({
    setup() {
      return () => <Repl editor={MonacoEditor}></Repl>;
    },
  });
</script>
<style lang="less" scoped></style>
