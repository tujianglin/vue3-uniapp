<template>
  <view class="content" @click="handleClick">
    {{ title }}
    <Demo1 />
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Demo1 from '/@/components/demo1.vue';
  const title = ref('Hello');
  const router = useRouter();
  const handleClick = () => {
    router.push({
      path: '/pages/hello/index',
    });
  };
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
