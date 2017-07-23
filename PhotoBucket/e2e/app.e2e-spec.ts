import { PhotoBucketPage } from './app.po';

describe('photo-bucket App', () => {
  let page: PhotoBucketPage;

  beforeEach(() => {
    page = new PhotoBucketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
