<template>
  <view class="content w-200 h-100 bg-[red]" @click="handleClick">
    {{ title }}
    <Demo1 />
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Demo1 from '/@/components/demo1.vue';
  import { useAppStore } from '/@/store/modules/app';
  const appStore = useAppStore();
  const title = ref('Hello');
  const router = useRouter();
  const handleClick = () => {
    console.log(appStore.a);
    router.push({
      path: '/pages/hello/index',
    });
  };
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .logo {
    margin: 200rpx auto 50rpx;
    width: 200rpx;
    height: 200rpx;
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
