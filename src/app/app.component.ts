import { Component, OnDestroy } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { MoviesThemoviedbService } from './services/movies-themoviedb.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movie Discovering Web App';
  private autocompleteMoviesNavBar: Array<Object> = [];
  private searchQueryNavBar: string;

  constructor(private http: Http, private moviesService: MoviesThemoviedbService, private jsonp: Jsonp){}

  public searchMoviesNavBar() {
    console.log('searchMoviesNavBar: ' + this.searchQueryNavBar)
    this.moviesService.sharedSearchMovies(this.searchQueryNavBar);
  }

  public autocompleteSearchMoviesNavBar() {
    if (this.searchQueryNavBar.length > 2) {
      this.moviesService.searchMovies(this.searchQueryNavBar)
      .subscribe(response => {
        console.log('autocompleteSearchMoviesNavBar')
        console.log(response.results)
        this.autocompleteMoviesNavBar = response.results;
      })
    } else {
      this.autocompleteMoviesNavBar = [];
    }
  }

  public selectNavBar(movie) {
    this.searchQueryNavBar = movie;
    this.autocompleteMoviesNavBar = [];
  }
}
