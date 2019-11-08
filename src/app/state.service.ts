import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  output: string[];
  constructor(private http: HttpClient) { };

  getData() {

    return this.http.get("http://localhost:3000/api");

  }


  clearData() {
    this.output = [];
  }
}
