<template>
  <main>
    <Card 
      v-for="element in store.cardFilm" 
      :key="element.id"
      :film="element"
      />
  </main>
</template>

<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';

export default {
  name:'Main',
  components:{
    Card,
  },
  data(){
    return{
      store
    }
  },
}
</script>

<style lang="scss" scoped>
  @use '../scss/partials/variables' as *;

  main{
    background-color: $bg-main;
  }
</style>