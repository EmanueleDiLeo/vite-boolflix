<template>
  <div>
    <h2>{{ film.title }}</h2>
    <h2>{{ film.original_title }}</h2>
    <h2>{{ film.original_language }}</h2>
    <h2>{{ film.vote_average }}</h2>
  </div>
</template>

<script>
export default {
  name:'Card',
  props:{
    film:Object,
  }
}
</script>

<style lang="scss" scoped>

</style>