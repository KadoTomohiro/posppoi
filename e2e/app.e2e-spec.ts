import { PosppoiPage } from './app.po';

describe('posppoi App', function() {
  let page: PosppoiPage;

  beforeEach(() => {
    page = new PosppoiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
