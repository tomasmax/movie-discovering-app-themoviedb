import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesIndexComponent } from './components/movies-index/movies-index.component';
import { MovieShowComponent } from './components/movie-show/movie-show.component';
import { MoviesThemoviedbService } from './services/movies-themoviedb.service'

@NgModule({
  declarations: [
    AppComponent,
    MoviesIndexComponent,
    MovieShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [MoviesThemoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
