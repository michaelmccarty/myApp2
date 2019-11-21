import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/api');
  }

  postData(toPost: {}) {
    return this.http.post('http://localhost:3000/api', toPost);
  }

  registerUser(newUser: User) {
    return this.http.post('http://localhost:3000/register', newUser);
  }
}
