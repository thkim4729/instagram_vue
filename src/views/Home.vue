<template>
  <div class="home">
    <div class="home-content">
      <core-app-bar></core-app-bar>
      <core-view></core-view>
      <core-footer></core-footer>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Home",
    components: {
      CoreAppBar: () => import("@/components/core/AppBar.vue"),
      CoreView: () => import("@/components/core/View.vue"),
      CoreFooter: () => import("@/components/core/Footer.vue")
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    background-color: #e7e7e7;
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  .home .home-content {
    max-width: 560px;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    position: relative;
  }
</style>