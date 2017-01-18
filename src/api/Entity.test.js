// @flow

import Entity from './Entity';

const TestEntity = new Entity(
  'localhost',
  'v1',
);

function createXHRmock() {
  let open = jest.fn();
  let send = jest.fn().mockImplementation(function(){
    let onload = this.onload.bind(this);
    let onerror = this.onerror.bind(this);
  });

  const xhrMockClass = function () {
    return {
      open,
      send
    };
  };

  window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
}

describe('Entity URI manipulation', () => {
  it ('builds correct query strings' , () => {
    const query_string = TestEntity._buildQueryString({
      'foo': 'bar',
      'baz': 'qux',
    });

    expect(query_string).toBe('foo=bar&baz=qux');
  });
});

describe('Entity base API calls', () => {
  it ('returns a Promise', () => {
	  createXHRmock();

    expect(TestEntity._getID("enterprises", -1)).toBeTruthy();
    expect(TestEntity._get("enterprises", {'foo': 'bar'})).toBeTruthy();
    expect(TestEntity._deleteID("enterprises", -1)).toBeTruthy();
    expect(TestEntity._post("enterprises", {'foo' : 'bar'})).toBeTruthy();
    expect(TestEntity._update("enterprises", -1, {'foo' : 'bar'})).toBeTruthy();
  });
});
