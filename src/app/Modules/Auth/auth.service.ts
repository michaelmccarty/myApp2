import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/user.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private db: AngularFireAuth, private router: Router) {}

  getData() {
    return this.http.get('http://localhost:3000/api');
  }

  postData(toPost: {}) {
    return this.http.post('http://localhost:3000/api', toPost);
  }

  async useAuth(action: string, user?: User) {
    if (action === 'logout')
      return await this.db.auth
        .signOut()
        .then(reply => {
          localStorage.removeItem('user');
          this.router.navigate(['login']);
        })
        .catch(err => {
          console.log('Logout error: ' + JSON.stringify(err));
        });
    else if (action === 'signIn')
      return await this.db.auth
        .signInWithEmailAndPassword(user.email, user.pass)
        .then(data => {
          this.db.auth.currentUser.getIdToken().then(reply => {
            this.http
              .post('http://localhost:3000/login', { token: reply })
              .toPromise()
              .then(response => {
                if (response['valid'] === 'true') {
                  localStorage.setItem('user', JSON.stringify(reply));
                  this.router.navigate(['dash']);
                }
              });
          });
        })
        .catch(err => {
          console.log('signIn failed: ' + err.message);
        });
    else if (action === 'register')
      return await this.db.auth
        .createUserWithEmailAndPassword(user.email, user.pass)
        .then(data => {
          this.db.auth.currentUser.getIdToken().then(reply => {
            this.http
              .post('http://localhost:3000/login', { token: reply })
              .toPromise()
              .then(response => {
                if (response['valid'] === 'true') {
                  localStorage.setItem('user', JSON.stringify(reply));
                  this.router.navigate(['dash']);
                }
              });
          });
        })
        .catch(err => {
          console.log('registration failed: ' + err.message);
        });
  }

  isAuthenticated(): boolean {
    //verify that front end token is valid on back end

    console.log('localStorage: ' + localStorage.getItem('user'));

    if (localStorage.getItem('user') !== null) {
      this.db.auth.currentUser.getIdToken().then(reply => {
        this.http
          .post('http://localhost:3000/login', { token: reply })
          .toPromise()
          .then(response => {
            if (response['valid'] === 'true') {
              console.log('XXXXXXXXXXXXXXXXXXXX THIS IS TRUE! ');
              return true;
            } else return false;
          });
      });
    } else return false;
  }

  registerUser(newUser: User) {
    this.useAuth('register', newUser);
  }

  signIn(user: User) {
    this.useAuth('signIn', user);
  }

  logout() {
    this.useAuth('logout');
  }

  loguser() {
    console.log(localStorage.getItem('user'));
  }
}
