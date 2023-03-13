<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" :to="{ path: '/' }">主页</van-tabbar-item>
    <van-tabbar-item icon="chart-o" :to="{ path: '/data' }">数据</van-tabbar-item>
    <van-tabbar-item icon="bell-o" :to="{ path: '/alarm' }">报警</van-tabbar-item>
    <van-tabbar-item icon="user-o" :to="{ path: '/user' }">用户</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>

</style>