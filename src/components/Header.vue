<template>
  <header class="d-flex justify-content-between ">
    <img src="/public/logo-boolflix.png" alt="logo">
    <div class="search">
      <input v-model="store.apiParams.query" type="text" placeholder="Cerca">
      <button @click="$emit('startSearch')" class="btn btn-danger">Invio</button>
    </div>
  </header>
</template>

<script>

import {store} from '../data/store';

export default {
  name:"Header",
  data(){
    return{
      store
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
  header{
    background-color: $bg-header;
    height: 15vh;
    padding: 30px 20px;
    img{
      width: 180px;
    }
    .search{
      input{
        margin: 10px;
      }
    }
  }
</style>