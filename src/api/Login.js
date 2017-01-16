// @flow

import axios from "axios";
import type {APIVersion} from "./Entity";

const LoginEndpoint = "login";

export default class Login {
  _baseURI: string;
  _version: APIVersion;

  constructor(baseURI: string, version: APIVersion) {
    this._baseURI = baseURI;
    this._version = version;
  }

  buildLoginEndpoint(): string {
    // TODO: refactor this and Entity::_buildEndpoint
    return this._baseURI + "/api/" + this._version + "/" + LoginEndpoint;
  }

  loginUser(userName: string, userPassword: string): Promise<Object> {
    console.log("loginUser:", userName, userPassword);
    return new Promise((resolve, reject) => {
        return axios
          .post(this.buildLoginEndpoint(), {
            user: { email: userName, password: userPassword }
          })
          .then(resp => {
            // {authorizationToken: {token: ..., exp: <expiry-8601>, user_name: ...}}
            var json = resp.data.authorizationToken;
            console.log("loginUser: ", resp, json);
            axios.interceptors.request.use(config => {
              console.log("axios JWT interceptor:", json.token);
              config.headers.Authorization = "Bearer " + json.token;
              return config;
            });
            resolve(json);
          })
          .catch(err => {
            console.log("loginUser: error:", err);
            reject(err);
          });
      }
    );
  }
}
