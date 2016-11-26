import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class MoviesThemoviedbService {
  apikey = '&api_key=0324eb4b8130330ff1662244a7f60777';
  baseUrl = 'https://api.themoviedb.org/3/';
  movie = 'movie/'
  sortByPopularity = '&sort_by=popularity.desc';
  jsonpCallback = '?callback=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp) {

    console.log('MoviesThemoviedbService started')
  }

  getPopularMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'popular' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getTopRatedMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'top_rated' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getUpComingMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'upcoming' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getNowPlayingMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'now_playing' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  searchMovies(query) {
    return this.jsonp.get(this.baseUrl + 'search/movie' + this.jsonpCallback + '&query=' + query + this.sortByPopularity + this.apikey)
      .map(result => result.json())
  }

  getMovieDetails(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getSimilarMovies(id) {
    return this.jsonp.get(this.baseUrl + this.movie +  id + '/similar' +this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getMovieReviews(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + '/reviews' +this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

}
