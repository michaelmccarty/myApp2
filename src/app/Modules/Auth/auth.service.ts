import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private db: AngularFireAuth) {}

  getData() {
    return this.http.get('http://localhost:3000/api');
  }

  postData(toPost: {}) {
    return this.http.post('http://localhost:3000/api', toPost);
  }

  async registerUser(newUser: User) {
    await this.db.auth
      .createUserWithEmailAndPassword(newUser.email, newUser.pass)
      .then(data => {
        console.log('Result: ' + JSON.stringify(data));
      })
      .catch(err => {
        console.log('register error: ' + err.message);
      });
  }

  async signIn(newUser: User) {
    await this.db.auth
      .signInWithEmailAndPassword(newUser.email, newUser.pass)
      .then(data => {
        console.log('Result: ' + JSON.stringify(data));
      })
      .catch(err => {
        console.log('signIn error: ' + err.message);
      });
  }
}
