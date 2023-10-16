<template>
  <div>
    <h2>{{ film.title }}</h2>
    <h2>{{ film.original_title }}</h2>
    <div class="language">
      <img v-if="languageImg" :src="urlImgLang" :alt="film.original_language">
      <h2 v-else>{{ film.original_language }}</h2>
    </div>
    <h2>{{ film.vote_average }}</h2>
  </div>
</template>

<script>
import { store } from '../../data/store';
export default {
  name:'Card',
  props:{
    film:Object,
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
    languageImg(){
      switch(this.film.original_language){
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