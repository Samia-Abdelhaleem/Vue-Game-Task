<template>
  <div class="details_page">
    <!-- <HeaderComponent></HeaderComponent> -->
    <AllDetailsComponents></AllDetailsComponents>
  </div>
</template>

<script>
import HeaderComponent from "../Home/headerComponent.vue";
import AllDetailsComponents from "./AllDetailsComponents.vue";

export default {
  name: "detailsPageComponent",
  components: {
    HeaderComponent,
    AllDetailsComponents,
  },
};
</script>

<style lang="css" scoped>
.details_page {
  background-color: #f5f5f5;
}
</style>
