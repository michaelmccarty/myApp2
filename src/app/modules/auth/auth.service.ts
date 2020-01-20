import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private store$: Store<fromRoot.State>, private http: HttpClient, private db: AngularFireAuth, private router: Router) {}

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

                  /////////////// this should go to store  ↓ 


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

  //this is my async isAuthenticated version
  async isAuthenticated(): Promise<any> {
    //verify that front end token is valid on back end

    //if not found in localStorage then user must not be authenticated
    if (localStorage.getItem('user') === null) return false;
    else {
      let idToken = await this.db.auth.currentUser.getIdToken();
      let response = await this.http
        .post('http://localhost:3000/login', { token: idToken })
        .toPromise();

      if (response['valid'] === 'true') return true;
      else return false;
    }
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
