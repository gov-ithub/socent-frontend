// @flow

import Enterprise from './Enterprise';
import { APIVersions } from './Entity';

import type { APIVersion } from './Entity';

export default class API {
  _baseURI: string;
  _version: APIVersion;

  constructor(
    baseURI: string = 'https://socent.cezarneaga.eu', 
    version: APIVersion = APIVersions.v1,
  ) {
    this._baseURI = baseURI;
    this._version = version;
  }  

  getEnterprise(): Enterprise {
    return new Enterprise(this._baseURI, this._version);
  }
}
