import { Component, OnInit } from '@angular/core';
import { MoviesThemoviedbService } from '../../services/movies-themoviedb.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'movie',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {
  movie: any = {};
  similarMovies: Array<Object>;

  constructor(private moviesService: MoviesThemoviedbService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe( id =>{
        console.log(id)
        this.moviesService.getMovieDetails(id)
          .subscribe(result => {
            console.log(result)
            this.movie = result
          })
      })

      this.activatedRoute.params
      .map(params => params['id'])
      .subscribe( id =>{
        console.log(id)
        this.moviesService.getSimilarMovies(id)
          .subscribe(response => {
            console.log(response)
            this.similarMovies = response.results
          })
      })
  }

}
