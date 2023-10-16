import {reactive} from "vue";

export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=06b299a80e4bc9840d33f61c66cf2ceb&query=gigi',
  cardFilm:[],
  cardTVSeries:[],
  searchFilm:null,

})