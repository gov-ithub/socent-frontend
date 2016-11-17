// @flow

import Entity from './Entity';

import { APIEndpoints } from './Entity';

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
  it ('uses different endpoints for prod and dev', () => {
    const original_env = process.env.NODE_ENV;

    function getEndpoint(
      node_env: string,
    ): string {
      process.env.NODE_ENV = node_env;
      return TestEntity._buildEndpoint(APIEndpoints.enterprises);
    }

    const dev_endpoint = getEndpoint("development");
    const prod_endpoint = getEndpoint("production");
    expect(dev_endpoint).not.toBe(prod_endpoint);

    process.env.NODE_ENV = original_env;
  });

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

    expect(TestEntity._getID(APIEndpoints.enterprises, -1)).toBeTruthy();
    expect(TestEntity._get(APIEndpoints.enterprises, {'foo': 'bar'})).toBeTruthy();
    expect(TestEntity._deleteID(APIEndpoints.enterprises, -1)).toBeTruthy();
    expect(TestEntity._post(APIEndpoints.enterprises, {'foo' : 'bar'})).toBeTruthy();
    expect(TestEntity._update(APIEndpoints.enterprises, -1, {'foo' : 'bar'})).toBeTruthy();
  });
});
