// @flow

import axios from 'axios';

export type APIEndpoint = 
  "enterprises" |
  "public" |
  "list" |
  "industry-classifications" |
  "social-intervention-domains" |
  "login";

export const APIVersions = {
  v1: "v1",
};
export type APIVersion = $Keys<typeof APIVersions>;

export type APIPayload = { [key: string]: string };

type APIHeaderConfig = {
  'Authorization': string,
}

type APIRequestConfig = {
  headers: APIHeaderConfig,
};

export default class Entity {
  _baseURI: string;
  _version: APIVersion;
  _token: string;
  _requestConfig: APIRequestConfig

  constructor(
    baseURI: string,
    version: APIVersion,
    token: string,
  ) {
    this._baseURI = baseURI;
    this._version = version;
    this._token = token;
    this._requestConfig = {
      headers: {
        'Authorization': 'Bearer ' + this._token,
      }
    };
  }

  buildEndpoint(
    endpoint: APIEndpoint,
  ): string {
      return this._baseURI + "/api/" + this._version + "/" + endpoint;
  }

  _buildQueryString(
    params: APIPayload,
  ): string {
    let queryParams = [];
    for (let i in params) {
      if (params.hasOwnProperty(i)) {
        queryParams.push(
          encodeURIComponent(i) + '=' + encodeURIComponent(params[i])
        );
      }
    }

    return queryParams.join('&');
  }

  _getID(
    endpoint: APIEndpoint,
    id: number,
  ): Promise<Object> {
    return axios.get(
      this.buildEndpoint(endpoint) + '/' + id,
      this._requestConfig,
    );
  }

  _get(
    endpoint: APIEndpoint,
    params: APIPayload,
  ): Promise<Object> {
    return axios.get(
      this.buildEndpoint(endpoint) + '?' + this._buildQueryString(params),
      this._requestConfig,
    );
  }

  _deleteID(
    endpoint: APIEndpoint,
    id: number,
  ): Promise<Object> {
    return axios.delete(
      this.buildEndpoint(endpoint) + '/' + id,
      this._requestConfig,
    );
  }

  _post(
    endpoint: APIEndpoint,
    payload: APIPayload,
  ): Promise<Object> {
    return axios.post(
      this.buildEndpoint(endpoint),
      payload,
      this._requestConfig,
    );
  }

  // TO DO: do we use PATCH or POST + 303 header?
  _update(
    endpoint: APIEndpoint,
    id: number,
    payload: APIPayload,
  ): Promise<Object> {
    return axios.patch(
      this.buildEndpoint(endpoint) + '/' + id,
      payload,
      this._requestConfig,
    );
  }
}
