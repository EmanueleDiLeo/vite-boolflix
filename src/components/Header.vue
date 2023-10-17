<template>
  <header class="d-flex justify-content-between ">
    <img src="/public/logo-boolflix.png" alt="logo">
    <div class="d-flex search">
      <input v-model.trim="store.apiParams.query" @keyup.enter="$emit('startSearch')" class="form-control" type="text" placeholder="Cerca">
      <select v-model="store.apiSearch" class="form-select">
        <option value="">Tutto</option>
        <option value="movie">Film</option>
        <option value="tv">Serie TV</option>
      </select>
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
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    img{
      width: 180px;
    }
    .search{
      align-items: center;
      select{
        margin: 10px;
      }

    }
  }
</style>