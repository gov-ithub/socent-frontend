// @flow

import Entity from './Entity';

import type { 
  APIPayload,
} from './Entity';

export default class Enterprise extends Entity {
  delete(
    id: number,
  ): Promise<Object> {
    return this._deleteID("enterprises", id);
  }  

  update(
    id: number,
    payload: APIPayload,
  ): Promise<Object> {
    return this._update("enterprises", id, payload);
  }

  create(
    payload: APIPayload,
  ): Promise<Object> {
    return this._post("enterprises", payload);
  }

  list(
    params: APIPayload,
  ): Promise<Object> {
    return this._get("enterprises", params);
  }

  getByID(
    id: number,
  ): Promise<Object> {
    return this._getID("enterprises", id);
  }
}
