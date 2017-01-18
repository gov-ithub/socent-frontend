// @flow

import Enterprise from './Enterprise';
import Caens from './Caens';
import Domains from './Domains';
import Entity, { APIVersions } from './Entity';

import axios from 'axios';
import {browserHistory} from "react-router";

import type { APIVersion } from './Entity';

type UserCredentials = {
  email: string,
  password: string,
};

const TOKEN_KEY = 'token';

export default class API {
  

  _baseURI: string;
  _version: APIVersion;
  _token: string;

  constructor(
    baseURI: string = 'https://socent.cezarneaga.eu',
    version: APIVersion = APIVersions.v1,
  ) {
    this._baseURI = baseURI;
    this._version = version;

    let token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      this._token = token;
    }
  }

  _setToken(token: string): void {
    this._token = token;
    localStorage.setItem(TOKEN_KEY, this._token);
  }

  _clearToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  _getToken(): string {
    let token = localStorage.getItem(TOKEN_KEY);
    return token ? token : '';
  }

  isLoggedIn(): boolean {
    return !!this._getToken();
  }

  login(user: UserCredentials): Promise<Object> {
    console.log("loginUser:", user.email, user.password);
    let ent = new Entity(this._baseURI, this._version, this._token);

    return new Promise((resolve, reject) => {
      return axios
        .post(ent.buildEndpoint("login"), {
          user: user
        })
        .then(resp => {
          // {authorizationToken: {token: ..., exp: <expiry-8601>, user_name: ...}}
          var json = resp.data.authorizationToken;
          console.log("loginUser: ", resp, json);
          console.log("JWT: ", json.token);
          this._setToken(json.token);
          browserHistory.push("/admin");
          resolve(json);
        })
        .catch(err => {
          console.log("loginUser: error:", err);
          reject(err);
        });
      }
    );
  }

  logout(): void {
    this._clearToken();
  }

  getEnterprise(): Enterprise {
    return new Enterprise(this._baseURI, this._version, this._token);
  }
  getCaens(): Caens {
    return new Caens(this._baseURI, this._version, this._token);
  }
  getDomains(): Domains {
    return new Domains(this._baseURI, this._version, this._token);
  }
}
