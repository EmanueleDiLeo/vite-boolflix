<template>
  <Header @startSearch="startApiSearch" />

  <div v-if="store.movie.length > 0 || store.apiSearch !=='movie'">
    <div v-if="store.movie.length > 0">
      <Main v-if="store.apiSearch !=='tv'" title="Film" type="movie"/>
    </div>
    <h2 v-else>Non ci sono Film</h2>
    <div v-if="store.tv.length > 0">
      <Main v-if="store.apiSearch !=='movie'" title="Serie TV" type="tv"/>
    </div>
    <h2 v-else>Non ci sono serie TV</h2>
  </div>
  <h2 v-else>Cerca un valore</h2>
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

    getApi(typeSearch){
      axios.get((store.apiUrl + typeSearch),{
        params: store.apiParams
      })
      .then( response => {
        store[typeSearch] = response.data.results;
        console.log(store[typeSearch]);
      })
      .catch(err => {
        console.log(err);
      })
    },

    startApiSearch(){
      this.getApi('movie');
      this.getApi('tv');
    },
  },

  mounted(){

  },

}
</script>

<style lang="scss">

</style>
