import { Component, OnInit } from '@angular/core';
import { MoviesThemoviedbService } from '../../services/movies-themoviedb.service'

@Component({
  selector: 'movies',
  templateUrl: './movies-index.component.html',
  styleUrls: ['./movies-index.component.scss']
})
export class MoviesIndexComponent implements OnInit {
  popularMovies: Array<Object>;
  topRatedMovies: Array<Object>;
  upComingMovies: Array<Object>;
  latestMovies: Array<Object>;
  searchQuery: string;
  searchResult: Array<Object> = [];

  constructor(private moviesService: MoviesThemoviedbService) { }

  ngOnInit() {

    //initialize all lists with data from themoviedb

    this.moviesService.getPopularMovies()
      .subscribe(
        response => {
          console.log(response.results)
          this.popularMovies = response.results;
        })

    this.moviesService.getTopRatedMovies()
      .subscribe(
        response => {
          console.log(response.results)
          this.topRatedMovies = response.results;
        })

    this.moviesService.getUpComingMovies()
      .subscribe(
        response => {
          console.log(response.results)
          this.upComingMovies = response.results;
        })

    this.moviesService.getLatestMovies()
      .subscribe(
        response => {
          console.log(response.results)
          this.latestMovies = response.results;
        })
  }

  searchMovies() {
    this.moviesService.searchMovies(this.searchQuery)
      .subscribe(response => {
        console.log(response.results)
        this.searchResult = response.results;
      })
  }

}
