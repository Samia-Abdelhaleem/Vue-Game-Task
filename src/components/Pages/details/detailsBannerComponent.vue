<template>
  <div class="container" v-if="isShow">
    <div class="banner_image mx-auto text-center">
      <img :src="game_banner" alt="" srcset="" />
    </div>

    <div class="all_details container">
      <div class="row details__row">
        <div class="col-lg-4 col-sm-6 ">
          <div class="item left__part">
            <img :src="game_imgUrl" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-8 col-sm-6">
          <div class="item right__part">
            <h5>{{ game_title }}</h5>
            <p>
              <span> rate : </span> <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
              {{ rate }}
            </p>
            <p><span> publisher : </span> {{ game_studio }}</p>
            <p><span> description : </span> {{ brief }}</p>
            <p><span> downloads : </span> {{ download_number }}</p>

            <p><span> details : </span> {{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "detailsBannerComponent",
  data() {
    return {
      isShow: false,
      id: "",
      rate: "",
      game_title: " ",
      game_studio: "",
      brief: "",
      download_number: "",
      categorey: "",
      satatus: "",
      game_imgUrl: "",
      game_banner: "",
      description: "",
    };
  },
  watch: {
    $route() {
      this.getGameInfo();
    },
    // id() {
    //   this.getGameInfo();
    // },
  },
  created() {
    this.getGameInfo();
  },
  methods: {
    getGameInfo() {
      this.id = this.$route.params.id;
      // console.log(this.id)
      axios
        .get(`data/?id=${this.id}`)
        .then((res) => {
          this.id = res.data[0].id;
          this.rate = res.data[0].rate;
          this.game_title = res.data[0].game_title;
          this.game_studio = res.data[0].game_studio;
          this.brief = res.data[0].brief;
          this.download_number = res.data[0].download_number;
          this.categorey = res.data[0].categorey;
          this.satatus = res.data[0].satatus;
          this.game_imgUrl = res.data[0].game_imgUrl;
          this.game_banner = res.data[0].game_banner;
          this.description = res.data[0].description;
          this.isShow = true;
        })
        .catch((err) => {
          console.log(err);
          this.$router.push({ name: "error" });
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
.banner_image {
  margin-top: 30px;
}
.banner_image img {
  display: block;
  height: 250px;
  width: 100%;
  border-radius: 4px;
}
.all_details {
  margin-top: 20px;
  background-color: white;
  padding: 40px;
  border-radius: 6px;
}
.all_details .left__part img {
  border-radius: 6px;
  height: 200px;
  width: 100%;
}

.all_details .right__part {
  padding-left: 10px;
}

.all_details .right__part h5 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #572589;
}

.all_details .right__part h5:after {
  content: "";
  width: 50px;
  height: 3px;
  margin-top: 8px;
  display: block;
  background: #572589;
}

.all_details .right__part p {
  font-size: 14.5px;
  line-height: 1.6;
}
.all_details .right__part p span {
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
}

.all_details .right__part p i {
  color: #572589;
}

@media (max-width: 320px) {
  .banner_image img {
    height: 200px;
  }

  .all_details {
    border-radius: 4px;
    padding: 10px;
  }

  .all_details .right__part h5 {
    font-size: 18px;
    margin-top: 20px;
  }

  .all_details .right__part p {
    font-size: 13.5px;
  }
  .all_details .right__part p span {
    font-size: 15px;
  }
}

@media (min-width: 321px) and (max-width: 576px)
{

  .all_details {
    border-radius: 4px;
    padding: 10px;
  }

  .all_details .right__part h5 {
    font-size: 18px;
    margin-top: 20px;
  }
  .all_details .right__part p {
    font-size: 13.5px;
  }
  .all_details .right__part p span {
    font-size: 15px;
  }
}
</style>
