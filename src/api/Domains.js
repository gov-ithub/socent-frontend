// @flow

import Entity from './Entity';

import type {
  APIPayload,
} from './Entity';

export default class Domains extends Entity {
  list(
    params: APIPayload,
  ): Promise<Object> {
    return this._get("social-intervention-domains", params);
  }

  getByID(
    id: number,
  ): Promise<Object> {
    return this._getID("social-intervention-domains", id);
  }
}
