import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken:any;
  user:any;

  constructor(  private http:Http) { }
  registerUser(user){
    var headers = new Headers();
    headers.append('challenge-Type', 'application/json');
    return this.http.post('http://localhost:7000/users/register', user, { headers: headers })
      .map(res => res.json());
  }
authenticateUser(user){
  var headers = new Headers();
  headers.append('challenge-Type', 'application/json');
  return this.http.post('http://localhost:7000/users/authenticate', user, { headers: headers })
    .map(res => res.json());
}
getProfile(){
  var headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('challenge-Type', 'application/json');
  return this.http.get('http://localhost:7000/users/profile',  { headers: headers })
    .map(res => res.json());
}
storeUserData(token,user){
  localStorage.setItem('id_token',token);
  localStorage.setItem('user',JSON.stringify(user));
  this.authToken=token;
  this.user=user;
}
loadToken(){
  const token=localStorage.getItem('id_token');
  this.authToken=token;

}
// signedIn(){
//   return tokenNotExpired();
// }
loggedIn() {
  return tokenNotExpired('id_token');
}
signout(){
  this.authToken=null;
  this.user=null;
  localStorage.clear();

}
}
