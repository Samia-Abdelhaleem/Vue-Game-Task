<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-sm-12">
          <div class="container inner__Container">
            <detailsBannerComponent></detailsBannerComponent>
            <!-- <detailsInfoComponent></detailsInfoComponent> -->
            <RecommendationComponent></RecommendationComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import detailsBannerComponent from "./detailsBannerComponent.vue";
import detailsInfoComponent from "./detailsInfoComponent.vue";
import RecommendationComponent from "../Home/recommendationsComponent.vue";
export default {
  name: "AllDetailsComponents",
  components: {
    detailsBannerComponent,
    detailsInfoComponent,
    RecommendationComponent,
  },
};
</script>

<style scoped>

@media (max-width: 320px)
{
.inner__Container{
padding: 0px;

}

}

</style>
