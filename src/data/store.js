import {reactive} from "vue";

export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/',
  apiSearch:'',
  apiParams:{
    api_key:'06b299a80e4bc9840d33f61c66cf2ceb',
    language:'it-IT',
    query:'pippo',
  },
  movie:[],
  tv:[],


  apiUrlImg:"http://image.tmdb.org/t/p/w500",

})