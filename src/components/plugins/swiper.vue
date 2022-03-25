<!-- <template>
  <swiper
    :modules="modules"
    :slides-per-view="10"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import SwiperCore from '../../../node_modules/swiper'
  import { Navigation, Pagination, Scrollbar, A11y } from '../../../node_modules/swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from '../../../node_modules/swiper/vue';

  // Import Swiper styles
  import '../../../node_modules/swiper/swiper.min.css';
  import '../../../node_modules/swiper/modules/navigation/navigation.min.css';
  import '../../../node_modules/swiper/modules/pagination/pagination.min.css';
  import '../../../node_modules/swiper/modules/autoplay/autoplay.min.css';
  import 'swiper/css/autoplay'

  // Import Swiper styles
  export default {
    name:'SliderComponent',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script> -->

<template>
  <div>
  <button @click="$refs.myVueperSlides[`${autoPlaying ? 'pause' : 'resume'}Autoplay`]();autoPlaying = !autoPlaying">
  {{ autoPlaying ? 'Pause' : 'Resume' }}
</button>
<button @click="pauseOnHover = !pauseOnHover">Pause on mouseover</button>
<code>Currently {{ internalAutoPlaying ? 'playing' : 'paused' }}</code>

<vueper-slides
  ref="myVueperSlides"
  autoplay
  :pause-on-hover="pauseOnHover"
  @autoplay-pause="internalAutoPlaying = false"
  @autoplay-resume="internalAutoPlaying = true">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="slide.id"
    :title="slide.title"
    :content="slide.content"
    :style="'background-color: ' + colors[i % 4]" />
  <template #pause>
    <i class="icon pause_circle_outline"></i>
  </template>
</vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "../../../node_modules/vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
data: () => ({
  pauseOnHover: true,
  autoPlaying: true,
  internalAutoPlaying: true,
  slides: [
    {
      id: 'slide-1',
      title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
      content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
    },
    // Other slides...
  ]
})
};
</script>

<style scoped></style>
