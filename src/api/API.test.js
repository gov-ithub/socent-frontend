// @flow

import API from './API';
import Enterprise from './Enterprise';

const TestAPI = new API(
  'localhost',
  'v1',
);

describe('Enterprise test', () => {
  it ('returns Enterprise object', () => {
    expect(TestAPI.getEnterprise()).toBeTruthy();
  });
});
