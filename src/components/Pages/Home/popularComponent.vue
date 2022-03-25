<template>
  <div class="container">
    <div class="populars">
      <div class="popular_titles d-flex flex-grow-0">
        <p class="text-capitalize">most popular</p>
        <p class="ms-auto text-uppercase">
          see all <i class="bi bi-caret-right"></i>
        </p>
      </div>
      <div class="populars_cards">
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
  name: "popularComponent",
   props:['sendSelectedCat'],
  data() {
    return {
      recommendedGames: [],
      allGames: [],
       shownCat:null
    };
  },
   watch:
  {
sendSelectedCat()
{
 this.shownCat =this.sendSelectedCat.toLowerCase()
 this.popularGames();
}
  },


  created() {
    this.popularGames();
  },
  methods: {
   popularGames() {
     if(this.shownCat == null || this.shownCat =="all")
     {
 axios
        .get("data")
        .then((res) => {
          this.recommendedGames = res.data.filter(
            (elem) => elem.satatus == "popular"
          );
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
              return (elem.satatus == "popular" && elem.categorey ==this.shownCat)
            }
          );
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
.populars {
  margin: 20px 0;
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  font-family: "Tajawal", sans-serif;
}

.populars .popular_titles p:nth-of-type(1) {
  font-size: 17px;
}
.populars .popular_titles p:nth-of-type(2) {
  color: #572589;
}
.populars_cards {
  display: flex;
  overflow-x: auto;

}

.populars_cards::-webkit-scrollbar {
  width: 0;
}
.populars_cards .item {
  min-width: 190px;
  padding: 10px;
  position: relative;
    flex-basis: 0;
    
}
.populars_cards .card_img
{
width: 100%;}
.populars_cards .card_img img {
  height: 140px;
  width: 100%;
  border-radius: 4px;
}

.populars_cards .item .card_text {
  padding: 5px;
  height: 90px;
  padding: 10px 0px;
  width: 100%;
}
.populars_cards .item .card_text p:nth-of-type(1) {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}
.populars_cards .item .card_text p:nth-of-type(2) {
  font-size: 13.5px;
}
.populars_cards .item .card_button {
  margin-top: 20px;
}
.populars_cards .item .card_button button {
  background-color: #572589;
  border-radius: 4px;
  color: white;
  font-size: 14px;
}

.populars_cards .item .card_rate {
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
.populars_cards .item .card_rate span {
  padding: 0px 3px;
}
</style>
