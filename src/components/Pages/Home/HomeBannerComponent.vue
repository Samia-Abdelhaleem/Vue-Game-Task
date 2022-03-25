<template>
  <div class="container">
    <div class="banner">
      <div class="row">
        <div class="col-lg-9 col-sm-6 col-md-6">
          <div class="item left_part">
            <img :src="bannerInfo.game_banner" alt="" srcset="" />
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="item right_part">
            <h5>{{ bannerInfo.game_title }}</h5>
            <p>{{ bannerInfo.game_studio }}</p>
            <p>
              {{ bannerInfo.brief }}
            </p>
            <p>{{ bannerInfo.download_number }}</p>
            <router-link :to="`data/${bannerInfo.id}`">
              <button class="btn form-control">more info</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeBannerComponent",
  props: ["sendSelectedCat"],
  data() {
    return {
      bannerInfo: {},
      id: "",
      shownCat: null,
    };
  },

  watch: {
    sendSelectedCat() {
      this.shownCat = this.sendSelectedCat.toLowerCase();
      // console.log(this.sendSelectedCat)
      // console.log(this.shownCat.toLowerCase())
      this.getGames();
    },
  },

  created() {
    this.getGames();
  },
  methods: {
    getGames() {
      if (this.shownCat == null || this.shownCat == "all") {
        axios
          .get("data")
          .then((res) => {
            // console.log(res.data);
            this.bannerInfo = res.data[0];
            // console.log(this.bannerInfo.game_title);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .get("data")
          .then((res) => {
            // console.log(res.data);
            this.bannerInfo = res.data.find((elem) => {
              return elem.categorey == this.shownCat;
            });
            // console.log(this.bannerInfo.game_title);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      // console.log(this.shownCat)
    },
    // showDetails()
    // {
    //   this.$router.push(`data/${this.id}`)

    // }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
.banner {
  background-color: white;
  font-family: "Tajawal", sans-serif;
  border-radius: 6px;
  margin-top: 30px;
}
.banner .left_part {
  background-position: 20% 20%;
  background-size: cover;
  height: 250px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-repeat: no-repeat;
}

.banner .left_part img {
  width: 100%;
  height: 100%;
}
.banner .right_part button {
  background-color: #572589;
  border-radius: 4px;
  color: white;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 10px;
}

.banner .right_part {
  padding: 20px 20px 20px 0px;
}
.banner .right_part p {
  margin-bottom: 4px;
}
.banner .right_part h5 {
  font-size: 20px;
  font-weight: bold;
}
.banner .right_part p:nth-of-type(1) {
  font-size: 17px;
}
.banner .right_part p:nth-of-type(2) {
  font-size: 15px;
}
.banner .right_part p:nth-of-type(3) {
  font-size: 13.5px;
  font-weight: bold;
}

@media (max-width: 320px) {
.banner .left_part
{
   height: 150px;
}

.banner .left_part img {
 
    border-radius: 4px;
 
}

.banner .right_part {
  padding: 20px;
}

.banner .right_part h5 {
  font-size: 16px;
}
.banner .right_part p:nth-of-type(1) {
  font-size: 15px;
}
.banner .right_part p:nth-of-type(2) {
  font-size: 13px;
}
.banner .right_part p:nth-of-type(3) {
  font-size: 12.5px;
}

.banner .right_part button{
font-size: 14px;}


}

@media (min-width: 321px) and (max-width: 576px)
{

.banner .right_part
{
padding: 20px;}
}

@media (min-width: 577px) and (max-width: 768px) 
{

.banner{
width: fit-content;

}
}

</style>
