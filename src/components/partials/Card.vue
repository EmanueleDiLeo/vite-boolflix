<template>
  <div class="col-4 py-3">
    <div class="card h-100">
      <div class="container-img">
        <img v-if="item.poster_path !== null" :src="getApiImg" :alt="item.title || item.name">
        <img v-else src="/404.jpg" alt="image-not-found">
      </div>
      <div class="card-body">
        <h2>{{ item.title || item.name }}</h2>
        <h2>{{ item.original_title || item.original_name }}</h2>
        <div class="language">
          <img v-if="languageImg" :src="urlImgLang" :alt="item.original_language">
          <h2 v-else>{{ item.original_language}}</h2>
        </div>
        <span v-for="(star,index) in stars" :key="index" class="fa-solid fa-star"></span>
        <span v-for="(wstar,index) in (5 - stars)" :key="index" class="fa-regular fa-star"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../data/store';
export default {
  name:'Card',
  props:{
    item:Object,
  },
  date(){
    return{
      store,
      urlImgLang : null,
    }
  },

  methods:{

  },

  computed:{

    getApiImg(){
      return (store.apiUrlImg + this.item.poster_path);
    },

    languageImg(){
      switch(this.item.original_language){
        case "it":
          this.urlImgLang = "/public/it.png"
          return true;
        case "en":
          this.urlImgLang = "/public/en.png"
          return true;
        default:
          return false;
      }
    },
    stars(){
      return Math.ceil(this.item.vote_average / 2);
    }

  },
  mounted(){
  }

}
</script>

<style lang="scss" scoped>

  .container-img{
    img{
      width: 100%;
    }
  }
  .language{
    img{
      width: 30px;
    }
  }
</style>