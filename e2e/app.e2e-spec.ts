import { MaterializePage } from './app.po';

describe('materialize App', function() {
  let page: MaterializePage;

  beforeEach(() => {
    page = new MaterializePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
