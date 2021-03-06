import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingComponent } from "./app.routing";
import { MoviesIndexComponent } from './components/movies-index/movies-index.component';
import { MovieShowComponent } from './components/movie-show/movie-show.component';
import { MoviesThemoviedbService } from './services/movies-themoviedb.service';
import { MoviesSearchResultComponent } from './components/movies-search-result/movies-search-result.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesIndexComponent,
    MovieShowComponent,
    MoviesSearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingComponent,
    JsonpModule
  ],
  providers: [MoviesThemoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
