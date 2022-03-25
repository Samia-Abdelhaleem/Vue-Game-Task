<template>
  <div class="home">
    <div class="header__container">
      <!-- <div class="row m-0">
          <div class="col-lg-8 offset-lg-2 col-sm-12 col-md-12"> -->
      <HeaderComponent></HeaderComponent>
      <!-- </div>
        </div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./headerComponent.vue";
import AllHomeComponents from "./AllHomeComponents.vue";

export default {
  name: "HomePageComponent",
  components: {
    HeaderComponent,
    AllHomeComponents,
  },
};
</script>

<style lang="css" scoped>
.home {
  background-color: #f5f5f5;
}
.header__container {
  background-color: #fff;
}
</style>
