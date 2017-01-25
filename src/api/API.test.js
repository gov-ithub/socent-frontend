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

describe('Caens test', () => {
  it ('returns Caens object', () => {
    expect(TestAPI.getCaens()).toBeTruthy();
  });
});

describe('Domains test', () => {
  it ('returns Domains object', () => {
    expect(TestAPI.getDomains()).toBeTruthy();
  });
});

describe('Auth test', () => {
  it ('doesn\'t auth without a token', () => {
    expect(TestAPI.isLoggedIn()).toBeFalsy();
  });

  it ('clears token on logout', () => {
    TestAPI._setToken('foo');
    expect(TestAPI._getToken()).toBeTruthy();
    TestAPI.logout();
    expect(TestAPI._getToken()).toBeFalsy();
  });
});
