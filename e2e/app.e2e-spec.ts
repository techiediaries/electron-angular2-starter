import { ElectronAngular2StarterPage } from './app.po';

describe('electron-angular2-starter App', function() {
  let page: ElectronAngular2StarterPage;

  beforeEach(() => {
    page = new ElectronAngular2StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
