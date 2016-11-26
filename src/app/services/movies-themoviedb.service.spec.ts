/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesThemoviedbService } from './movies-themoviedb.service';

describe('MoviesThemoviedbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesThemoviedbService]
    });
  });

  it('should ...', inject([MoviesThemoviedbService], (service: MoviesThemoviedbService) => {
    expect(service).toBeTruthy();
  }));
});
