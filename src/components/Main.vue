<template>
  <main>
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="row">
          <Card
          v-for="element in store[type]" 
          :key="element.id"
          :item="element"
          />
      </div>
    </div>

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
  props:{
    title:String,
    type:Object,
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
    padding-top: 15vh;
    background-color: $bg-main;
    min-height: 85vh;

    h2{
      color: white;
    }
  }
</style>