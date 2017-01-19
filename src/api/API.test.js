import API from './API';
import '../jest/localstorage';

const TestAPI = new API(
  'localhost',
  'v1',
);

describe('Enterprise test', () => {
  it ('returns Enterprise object', () => {
    expect(TestAPI.getEnterprise()).toBeTruthy();
  });
});
