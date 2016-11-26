import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class MoviesThemoviedbService {
  apikey = '&api_key=0324eb4b8130330ff1662244a7f60777';
  baseUrl = 'https://api.themoviedb.org/3/';
  movie = 'movie/'
  popularMovies = '&sort_by=popularity.desc';
  jsonpCallback = '?callback=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp) {

    console.log('MoviesThemoviedbService started')
  }

  getPopular() {
    return this.jsonp.get(this.baseUrl + this.movie + 'popular' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getTopRated() {
    return this.jsonp.get(this.baseUrl + this.movie + 'top_rated' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getUpComing() {
    return this.jsonp.get(this.baseUrl + this.movie + 'upcoming' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  getLatest() {
    return this.jsonp.get(this.baseUrl + this.movie + 'latest' + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }

  searchMovie(searchStr) {
    return this.jsonp.get(this.baseUrl + 'search/movie' + this.jsonpCallback + '&query=' + searchStr + this.popularMovies + this.apikey)
      .map(result => result.json())
  }

  movieDetails(id) {
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
