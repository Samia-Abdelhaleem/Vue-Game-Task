<template>
  <div class="container" v-if="isShow">
    <div class="recommendations">
      <div class="recommendation_titles d-flex">
        <p class="text-capitalize">most recommendations</p>
        <p class="ms-auto text-uppercase">
          see all <i class="bi bi-caret-right"></i>
        </p>
      </div>
      <div class="recommendations_cards">
        <div class="item" v-for="game of recommendedGames" :key="game.id">
          <div class="card_img">
            <img :src="game.game_imgUrl" alt="" class="img-fluid" />
          </div>
          <div class="card_text">
            <p>{{ game.game_title }}</p>
            <p>{{ game.brief }}</p>
          </div>

          <div class="card_button">
            <!-- <button class="btn form-control text-uppercase">get now</button> -->
            <router-link :to="`data/${game.id}`">
              <button class="btn form-control text-uppercase" @click="scrollPage">
                get now
              </button></router-link
            >
          </div>
          <div class="card_rate">
            <i class="bi bi-star-fill"></i> <span> {{ game.rate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RecommendationComponent",
  props:['sendSelectedCat'],
  data() {
    return {
      recommendedGames: [],
      allGames: [],
      isShow: false,
       shownCat:null
    };
  },
    watch:
  {
sendSelectedCat()
{
 this.shownCat =this.sendSelectedCat.toLowerCase()
 this.getREcommendedGames();
}
  },

  created() {
    this.getREcommendedGames();
  },
  methods: {
    getREcommendedGames() {

       if(this.shownCat == null || this.shownCat =="all")
     {
 axios
        .get("data")
        .then((res) => {
          this.recommendedGames = res.data.filter(
            (elem) => elem.satatus == "recommendation"
          );
          this.isShow = true;
          // this.recommendedGames=this.allGames.splice(0,5)
          // console.log(this.recommendedGames);
        })
        .catch((err) => {
          console.log(err);
        });
     }

     else
     {

        axios
        .get("data")
        .then((res) => {
          this.recommendedGames = res.data.filter(
            (elem) =>
            {
 return (elem.satatus == "recommendation" && elem.categorey ==this.shownCat)
            } 
          );
          this.isShow = true;
          // this.recommendedGames=this.allGames.splice(0,5)
          // console.log(this.recommendedGames);
        })
        .catch((err) => {
          console.log(err);
        });

     }
     
    },
    scrollPage()
    {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
.recommendations {
  margin: 20px 0;
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  font-family: "Tajawal", sans-serif;
}

.recommendations .recommendation_titles p:nth-of-type(1) {
  font-size: 17px;
}
.recommendations .recommendation_titles p:nth-of-type(2) {
  color: #572589;
}
.recommendations_cards {
  display: flex;
  overflow-x: auto;
}

.recommendations_cards::-webkit-scrollbar {
  width: 0;
}
.recommendations_cards .item {
  min-width: 190px;
  padding: 10px;
  position: relative;
}
.recommendations_cards .card_img img {
  height: 140px;
  width: 100%;
  border-radius: 4px;
}

.recommendations_cards .item .card_text {
  padding: 5px;
  height: 70px;
  padding: 10px 0px;
}
.recommendations_cards .item .card_text p:nth-of-type(1) {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}
.recommendations_cards .item .card_text p:nth-of-type(2) {
  font-size: 13.5px;
}
.recommendations_cards .item .card_button {
  margin-top: 20px;
}
.recommendations_cards .item .card_button button {
  background-color: #572589;
  border-radius: 4px;
  color: white;
  font-size: 14px;
}

.recommendations_cards .item .card_rate {
  font-size: 10px;
  color: #572589;
  background-color: white;
  border-radius: 4px;
  position: absolute;
  top: 6%;
  left: 10%;
  padding: 2px 6px;
  font-weight: bold;
}
.recommendations_cards .item .card_rate span {
  padding: 0px 3px;
}
</style>
