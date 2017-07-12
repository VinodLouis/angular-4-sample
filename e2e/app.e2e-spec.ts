import { TaskCrudPage } from './app.po';

describe('task-crud App', () => {
  let page: TaskCrudPage;

  beforeEach(() => {
    page = new TaskCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
