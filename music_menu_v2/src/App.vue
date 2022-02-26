<template>
  <div id="app">
    <router-view v-if="isRouterShow"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isRouterShow: true
    };
  },
  provide () {
    return {
      reload: this.reload,
    };
  },
  methods: {
    async reload () {
      this.isRouterShow = false;
      await this.$nextTick();
      this.isRouterShow = true;
    },
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 70%;
  margin: auto;
}
</style>