<template>
  <Header @startSearch="startApiSearch" />
  <div v-if="store.movie.length > 0 || store.tv.length > 0">
    <Main v-if="store.apiSearch !=='tv'" title="Film" type="movie"/>
    <Main v-if="store.apiSearch !=='movie'" title="Serie TV" type="tv"/>
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

    getApi(type){
      axios.get((store.apiUrl + type),{
        params: store.apiParams
      })
      .then( response => {
        store[type] = response.data.results;
        console.log(store[type]);
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
