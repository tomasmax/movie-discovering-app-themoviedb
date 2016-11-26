import { Component } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { MoviesThemoviedbService } from './services/movies-themoviedb.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http, private movieService: MoviesThemoviedbService, private jsonp: Jsonp){}
}
