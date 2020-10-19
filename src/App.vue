<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: "App",

    components: {},

    data: () => ({
      //
    })
  };
</script>
<style lang="scss">
  a {
    text-decoration: none;
  }

  .plus-badge>span>span {
    left: calc(100%-20px) !important;
    top: calc(100%-20px) !important;
  }
</style>