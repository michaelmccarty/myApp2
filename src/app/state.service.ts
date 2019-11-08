import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  dataStore: string[];
  constructor(private http: HttpClient) { };

  getData() {

    return this.http.get("http://localhost:3000/api");

  }

  postData(toPost:string) {

    return this.http.post("http://localhost:3000/api", {"toPost": toPost});

  }


  clearData() {
    this.dataStore = [];
  }


}
