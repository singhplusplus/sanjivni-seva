import { SanjivniSevaPage } from './app.po';

describe('sanjivni-seva App', function() {
  let page: SanjivniSevaPage;

  beforeEach(() => {
    page = new SanjivniSevaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
