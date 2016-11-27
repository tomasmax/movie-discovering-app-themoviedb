import { Component, OnInit } from '@angular/core';
import { MoviesThemoviedbService } from '../../services/movies-themoviedb.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'movie',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {
  private similarMovies: Array<Object> = [];
  private movie: any = {};

  constructor(
    private moviesService: MoviesThemoviedbService, 
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {

    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.moviesService.getMovieDetails(id))
      .subscribe(result => this.movie = result);

    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.moviesService.getSimilarMovies(id))
      .subscribe(response => this.similarMovies = response.results);

    // this.moviesService
    //     .getSimilarMovies(this.route.snapshot.params['id'])
    //     .subscribe(response => {
    //       console.log('this.moviesService.getSimilarMovies')
    //       console.log(response.results)
    //       this.similarMovies = response.results
    //     });
  }

}
