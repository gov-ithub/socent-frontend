// @flow

import Entity, {APIEndpoints} from './Entity';

import type { 
  APIPayload,
} from './Entity';

export default class Enterprise extends Entity {
  delete(
    id: number,
  ): Promise<Object> {
    return this._deleteID(APIEndpoints.enterprises, id);
  }  

  update(
    id: number,
    payload: APIPayload,
  ): Promise<Object> {
    return this._update(APIEndpoints.enterprises, id, payload);
  }

  create(
    payload: APIPayload,
  ): Promise<Object> {
    return this._post(APIEndpoints.enterprises, payload);
  }

  list(
    params: APIPayload,
  ): Promise<Object> {
    return this._get(APIEndpoints.enterprises, params);
  }

  getByID(
    id: number,
  ): Promise<Object> {
    return this._getID(APIEndpoints.enterprises, id);
  }
}
