// @flow
import Auth0Lock from 'auth0-lock';
import { isTokenExpired } from './jwtHelper';
import EventEmitter from 'events';
import { browserHistory } from 'react-router';
export type UserID = string | number;
export type UserProfileMetadata = {
  telefon?: string
};
export type UserProfile = {
  name?: string,
  email?: string,
  nickname?: string,
  user_metadata?: UserProfileMetadata,
  created_at?: string,
  updated_at?: string,
  picture?: string
}
export default class AuthService extends EventEmitter {
  domain: string;
  login: () => void;
  lock: Auth0Lock;
  constructor(clientId: string, domain: string) {
    super();
    this.domain = domain
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirect: false
      },
      additionalSignUpFields: [{
        name: "Telefon",
        placeholder: "Număr telefon",
        validator: function(value) {
          return value.length > 12 && value.length < 15;
        }
      }]
    })

    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.lock.on('authorization_error', this._authorizationError.bind(this));

    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult: any){
    this.setToken(authResult.idToken);
    browserHistory.replace('/admin');

    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the profile', error);
      } else {
        this.setProfile(profile);
      }
    });
  }

  _authorizationError(error: string) {
    console.log('Authentication error', error);
  }

  login(): void {
    this.lock.show()
  }

  setProfile(profile: UserProfile): void {
    localStorage.setItem('profile', JSON.stringify(profile));
    this.emit('profile_updated', profile);
  }

  getProfile(): UserProfile {
    const profile = localStorage.getItem('profile');
    const profile_obj = profile
      ? JSON.parse(profile)
      : {};

    return (profile_obj: UserProfile);
  }

  isLoggedIn(): boolean{
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  }

  setToken(idToken: string): void {
    localStorage.setItem('id_token', idToken)
  }

  getToken(): ?string {
    return localStorage.getItem('id_token')
  }

  logout(): void{
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
