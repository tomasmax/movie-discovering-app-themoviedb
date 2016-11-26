import { MovieDiscoveringAppThemoviedbPage } from './app.po';

describe('movie-discovering-app-themoviedb App', function() {
  let page: MovieDiscoveringAppThemoviedbPage;

  beforeEach(() => {
    page = new MovieDiscoveringAppThemoviedbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
