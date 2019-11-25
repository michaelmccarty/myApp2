import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';

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

  registerUser(newUser: User) {
    this.db.auth.createUserWithEmailAndPassword(newUser.email, newUser.pass).then(reply => {
      console.log(reply);
    });
    return this.http.post('http://localhost:3000/register', newUser);
  }

  signIn(newUser: User) {
    this.db.auth.signInWithEmailAndPassword(newUser.email, newUser.pass).then(reply => {
      console.log(reply);
    });
    return this.http.post('http://localhost:3000/login', newUser);
  }
}
