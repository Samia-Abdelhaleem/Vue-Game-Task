<template>
  <div class="content">
    <div class="slider">
      <div class="slider-track">
        <ul class="d-flex">
          <li
            v-for="(sliderbtn, index) of sliderButtons"
            :key="sliderbtn"
            class="slide"
            :class="IsStyled ? 'colorStyle' : 'normalStyle'"
            @click="
              addStyle(index);
              saveCat(sliderbtn);
            "
          >
            <p :ref="`SideRef${index}`">
              {{ sliderbtn }} <i class="bi bi-check"></i>
            </p>
          </li>
        </ul>

        <!-- <div v-for="sliderbtn of sliderButtons" :key="sliderbtn" class="slide">
          {{ sliderbtn }} <i class="bi bi-check"></i>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { checkCompatEnabled } from "@vue/compiler-core";
import { ref } from "vue";
export default {
  name: "SliderComponent",
  emits: ["sendCat"],
  data() {
    return {
      sliderButtons: [
        "All",
        "Action",
        "Adventure",
        "Arcade",
        "Sports",
        "All",
        "Action",
        "Adventure",
        "Arcade",
        "Sports",
        "All",
        "Action",
        "Adventure",
        "Arcade",
        "Sports",
        "All",
        "Action",
        "Adventure",
        "Arcade",
        "Sports",
        "All",
        "Action",
        "Adventure",
        "Arcade",
        "Sports",
        "All",
        "Action",
        "Adventure",
        "Arcade",
        "Sports",
      ],
      IsStyled: false,
      currentIndex: "",
      selectedItem: "",
    };
  },
  watch:
  {
IsStyled ()
{
  this.IsStyled = this.IsStyled
}
  },
  mounted() {
    this.currentIndex = 0;

    this.addStyle(this.currentIndex);
  },
 
  methods: {
    addStyle(index) {
      for (let i = 0; i < this.sliderButtons.length; i++) {
        // console.log( this.$refs[`SideRef${i}`][0])
        this.$refs[`SideRef${i}`][0].classList.remove("colorStyle");
        this.$refs[`SideRef${i}`][0].children[0].classList.remove("showIcon");
      }
      this.currentIndex = index;
      this.selectedItem = this.$refs[`SideRef${index}`][0];
      this.selectedItem.classList.add("colorStyle");
      this.selectedItem.children[0].classList.add("showIcon");

      // console.log(this.selectedItem.children[0])
    },
    saveCat(category) {
      this.$emit("sendCat", category);
    },

    // check()
    // { console.log(this.IsStyled);

    // }
  },

unmounted() {
   this.IsStyled = false
    console.log("hi")
   
 },
  // destroyed() {
  //   this.check()
  // },
};
</script>

<style scoped>
.content {
  background-color: #fff;
}
.slider {
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.slider-track {
  display: flex;
  width: calc(150px * 24);
  animation: scroll 40s linear infinite;
  height: 50px;
}
.slide {
  width: 150px;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  color: #000;
}

.slide p {
  border: 1px solid #572589;
  padding: 2px 12px;
  border-radius: 20px;
  width: 100%;
}

.slide p i {
  display: none;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-130px * 13));
  }
}

.colorStyle {
  color: white;
  background-color: #572589;
}

.showIcon {
  display: inline-block !important;
}

@media (max-width: 320px) {
  .slider {
    font-size: 13px;
  }

  .slider-track {
    width: calc(120px * 24);
  }
  .slide {
    width: 120px;
    padding: 8px;
    margin-top: 8px;
  }

  .slide p {
    padding: 2px 6px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-120px * 13));
    }
  }
}

@media (min-width: 321px) and (max-width: 576px)
{

}


</style>
