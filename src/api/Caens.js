// @flow

import Entity, {APIEndpoints} from './Entity';

import type {
  APIPayload,
} from './Entity';

export default class Caens extends Entity {
  delete(
    id: number,
  ): Promise<Object> {
    return this._deleteID(APIEndpoints.industry_classifications, id);
  }

  update(
    id: number,
    payload: APIPayload,
  ): Promise<Object> {
    return this._update(APIEndpoints.industry_classifications, id, payload);
  }

  create(
    payload: APIPayload,
  ): Promise<Object> {
    return this._post(APIEndpoints.industry_classifications, payload);
  }

  list(
    params: APIPayload,
  ): Promise<Object> {
    return this._get(APIEndpoints.industry_classifications, params);
  }

  getByID(
    id: number,
  ): Promise<Object> {
    return this._getID(APIEndpoints.industry_classifications, id);
  }
}
