// @flow

import Entity from './Entity';

import type {
  APIPayload,
} from './Entity';

export default class Caens extends Entity {
  delete(
    id: number,
  ): Promise<Object> {
    return this._deleteID("industry-classifications", id);
  }

  update(
    id: number,
    payload: APIPayload,
  ): Promise<Object> {
    return this._update("industry-classifications", id, payload);
  }

  create(
    payload: APIPayload,
  ): Promise<Object> {
    return this._post("industry-classifications", payload);
  }

  list(
    params: APIPayload,
  ): Promise<Object> {
    return this._get("industry-classifications", params);
  }

  getByID(
    id: number,
  ): Promise<Object> {
    return this._getID("industry-classifications", id);
  }
}
