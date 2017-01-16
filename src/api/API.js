// @flow

import Enterprise from './Enterprise';
import Caens from './Caens';
import Domains from './Domains';
import { APIVersions } from './Entity';
import Login from "./Login"

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
  getLogin(): Login {
    return new Login(this._baseURI, this._version);
  }
  getEnterprise(): Enterprise {
    return new Enterprise(this._baseURI, this._version);
  }
  getCaens(): Caens {
    return new Caens(this._baseURI, this._version);
  }
  getDomains(): Domains {
    return new Domains(this._baseURI, this._version);
  }
}
