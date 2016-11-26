import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MoviesIndexComponent } from './components/movies-index/movies-index.component';
import { MovieShowComponent } from './components/movie-show/movie-show.component';

const AppRoutes: Routes = [
  {
    path: '', component: MoviesIndexComponent
  },
  {
    path: 'movie/:id', component: MovieShowComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
    ],
  exports: [
    RouterModule
    ]
})

export class RoutingComponent {}