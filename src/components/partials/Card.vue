<template>
  <div class=" py-3">
    <div class="card h-100 container-card">
      <div class="container-img">
        <img v-if="item.poster_path !== null" :src="getApiImg" :alt="item.title || item.name">
        <img v-else src="/404.png" :alt="item.title || item.name">
      </div>
      <div class="  overflow-y-auto  h-100 ">
      <div class="card-body container-text">
        <h2>{{ item.title || item.name }}</h2>
        <h2>{{ item.original_title || item.original_name }}</h2>
        <div class="language">
          <img v-if="languageImg" :src="urlImgLang" :alt="item.original_language">
          <h2 v-else>{{ item.original_language}}</h2>
        </div>
        <div class=" star ">
          <span v-for="star in stars" :key="star" class="fa-solid fa-star"></span>
          <span v-for="wstar in (5 - stars)" :key="wstar" class="fa-regular fa-star"></span>
        </div>
        <p>{{ item.overview }}</p>
      </div>
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

  .container-card{
    position: relative;
    cursor: pointer;
    overflow-y:auto;
    
    .container-img{
      img{
        width: 100%;
        object-fit: cover;
      }
    }
    .container-text{
      display: none;
      color: white;
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      min-height: 100%;
      background-color: #434343ab;
      // transition:height 2s;
      .language{
        img{
          width: 30px;
        }
      }
    }
    &:hover .container-text{
      // height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
    }

  }



</style>