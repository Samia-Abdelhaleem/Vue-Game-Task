<template>
    <div>
    <SliderComponent @sendCat="chosenCat"></SliderComponent>
     <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
         <HomeBannerComponent :sendSelectedCat="selectedCat"></HomeBannerComponent>
          <RecommendationComponent :sendSelectedCat="selectedCat"></RecommendationComponent>
          <popularComponent :sendSelectedCat="selectedCat"></popularComponent>
        </div>
      </div>
      </div>
    
   


    </div>
</template>

<script>
import SliderComponent from "./sliderComponent.vue";
import detailsPageComponent from "../details/detailsPage.vue";
import HomeBannerComponent from "./HomeBannerComponent.vue";
import RecommendationComponent from "./recommendationsComponent.vue";
import popularComponent from "./popularComponent.vue";
    export default {
        name:'AllHomeComponents',
         components: {

    SliderComponent,
    detailsPageComponent,
    HomeBannerComponent,
    RecommendationComponent,
    popularComponent,
  }, data() {
    return {
      
      selectedCat:''
    }
  },
  
  methods: {
    chosenCat(selectedCat)
    {
      this.selectedCat =selectedCat
// console.log(selectedCat)
    }
  },
    }
</script>

<style scoped>

</style>