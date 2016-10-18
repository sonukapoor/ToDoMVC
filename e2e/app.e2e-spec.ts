import { ToDoMVCPage } from './app.po';

describe('to-do-mvc App', function() {
  let page: ToDoMVCPage;

  beforeEach(() => {
    page = new ToDoMVCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
