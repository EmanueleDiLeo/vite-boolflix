<template>
  <Header @startSearch="getApi" />
  <Main />
</template>

<script>
import Header from './components/Header.vue'; 
import Main from './components/Main.vue';
import axios from 'axios';
import {store} from './data/store';

export default {
  name:"App",
  components:{
    Header,
    Main,
  },

  data(){
    return{
      store
    }
  },

  methods:{

    getApi(){
      axios.get(store.apiUrl,{
        params:{
          query: store.searchFilm,
        }
      })
      .then( response => {
        store.cardFilm = response.data.results;
        console.log(store.cardFilm);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },

  mounted(){

  },


}
</script>

<style lang="scss">

</style>
