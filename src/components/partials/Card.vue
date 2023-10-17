<template>
  <div class="col-4 py-3">
    <div class="card h-100">
      <div class="container-img">
        <img :src="getApiImg()" :alt="item.title || item.name">
      </div>
      <div class="card-body">
        <h2>{{ item.title || item.name }}</h2>
        <h2>{{ item.original_title || item.original_name }}</h2>
        <div class="language">
          <img v-if="languageImg" :src="urlImgLang" :alt="item.original_language">
          <h2 v-else>{{ item.original_language}}</h2>
        </div>
      <h2>{{ item.vote_average }}</h2>
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
      return (this.store.apiUrlImg + this.item.poster_path);
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
    }

  }
}
</script>

<style lang="scss" scoped>
  .language{
    img{
      width: 30px;
    }
  }
</style>