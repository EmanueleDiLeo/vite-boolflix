<template>
  <main>
    <div class="container">
      <h1>{{ title }}</h1>

      <swiper 
        :navigation="true"
        :freeMode="true"
        :keyboard="{enabled: true,}"
        :pagination="{clickable: true,}"
        :modules="modules" 
        class="mySwiper"
        :slides-per-view="3"
        :space-between="50"
        
        >
        <swiper-slide v-for="element in store[type]" :key="element.id">
          <Card :item="element"/>
        </swiper-slide>

      </swiper>


      <div class="row">
          
      </div>
    </div>

  </main>
</template>

<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';

 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';


// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Navigation, FreeMode, Keyboard, Pagination } from 'swiper/modules';


export default {
  name:'Main',
  components:{
    Card,
    Swiper,
    SwiperSlide,
  },

  props:{
    title:String,
    type:Object,
  },

  setup() {
    return {
      modules: [Navigation, FreeMode, Pagination, Keyboard],
    };
  },

  data(){
    return{
      store
    }
  },
}
</script>

<style lang="scss">
  @use '../scss/partials/variables' as *;

  main{
    padding-top: 20vh;
    background-color: $bg-main;
    min-height: 80vh;

    h1{
      color: white;
    }
  }
</style>