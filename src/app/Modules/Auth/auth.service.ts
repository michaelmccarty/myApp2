import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/user.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthed=false;
  constructor(private http: HttpClient, private db: AngularFireAuth, private router: Router) {}

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
        this.isAuthed=true;
        this.router.navigate(['dash']);
      })
      .catch(err => {
        console.log('register failed: ' + err.message);
      });
  }

  async signIn(newUser: User) {
    await this.db.auth
      .signInWithEmailAndPassword(newUser.email, newUser.pass)
      .then(data => {
        console.log('Result: ' + JSON.stringify(data));
        this.isAuthed=true;
        this.router.navigate(['dash']);
      })
      .catch(err => {
        console.log('signIn failed: ' + err.message);
      });
  }
}
