import { Component, OnInit } from '@angular/core';
import { MoviesThemoviedbService } from '../../services/movies-themoviedb.service'

@Component({
  selector: 'movies-search-result',
  templateUrl: './movies-search-result.component.html',
  styleUrls: ['./movies-search-result.component.scss']
})
export class MoviesSearchResultComponent implements OnInit {

  constructor(
    private moviesService: MoviesThemoviedbService
  ) { 

  }

  ngOnInit() {
    
  }

  public removeSearchResults() {
    this.moviesService.setSharedSearchResult([]);
  }
}
