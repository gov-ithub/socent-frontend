// @flow

import axios from 'axios';

export const APIEndpoints = {
  enterprises: "enterprises",
  public: "public",
  list: "list",
  industry_classifications: "industry-classifications"
};
export type APIEndpoint = $Keys<typeof APIEndpoints>;

export const APIVersions = {
  v1: "v1",
};
export type APIVersion = $Keys<typeof APIVersions>;

export type APIPayload = { [key: string]: string };

export default class Entity {
  _baseURI: string;
  _version: APIVersion;

  constructor(
    baseURI: string,
    version: APIVersion,
  ) {
    this._baseURI = baseURI;
    this._version = version;
  }

  _buildEndpoint(
    endpoint: APIEndpoint,
  ): string {
    if (process.env.NODE_ENV === 'development') {
      return this._baseURI + "/api/" + this._version + "/" + endpoint;
    } else {
      return location.protocol + '//' + location.hostname + ':3001/' + endpoint;
    }
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
    return axios.get(this._buildEndpoint(endpoint) + '/' + id);
  }

  _get(
    endpoint: APIEndpoint,
    params: APIPayload,
  ): Promise<Object> {
    return axios.get(
      this._buildEndpoint(endpoint) + '?' + this._buildQueryString(params),
    );
  }

  _deleteID(
    endpoint: APIEndpoint,
    id: number,
  ): Promise<Object> {
    return axios.delete(this._buildEndpoint(endpoint) + '/' + id);
  }

  _post(
    endpoint: APIEndpoint,
    payload: APIPayload,
  ): Promise<Object> {
    return axios.post(
      this._buildEndpoint(endpoint),
      payload,
    );
  }

  // TO DO: do we use PATCH or POST + 303 header?
  _update(
    endpoint: APIEndpoint,
    id: number,
    payload: APIPayload,
  ): Promise<Object> {
    return axios.patch(
      this._buildEndpoint(endpoint) + '/' + id,
      payload,
    );
  }
}
