import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Challenge } from '../challenge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChallengeService {

  //private BASE_URL: string = 'http://localhost:6100/api/challenges/';
  constructor(private http: Http) { }

  getChallenges() {
    return this.http.get('http://localhost:6200/api/challenges')
      .map(res => res.json()
      );
  }
  addChallenge(newChallenge) {
    var headers = new Headers();
    headers.append('challenge-Type', 'application/json');
    return this.http.post('http://localhost:6200/api/challenge', newChallenge, { headers: headers })
      .map(res => res.json());
  }
  editChallenge(id) {
    var headers = new Headers();
    headers.append('challenge-Type', 'application/json');
    return this.http.put('http://localhost:6200/api/challenge/' + id, { headers: headers })
      .map(res => res.json());

  }

  deleteChallenge(id) {
    return this.http.delete('http://localhost:6200/api/challenge/' + id)
      .map(res => res.json());

  }

}
