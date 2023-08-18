<template>
  <view>
    <uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
      <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    </uni-card>
    <view class="h-400 w-400" id="myEchart" />
  </view>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  onMounted(async () => {});
</script>

<style lang="scss" scoped></style>
