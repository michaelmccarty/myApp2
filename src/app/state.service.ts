import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  output: string[];
  constructor(private http: HttpClient) { }

  getData():string[] {

    this.http.get("http://localhost:3000/api").subscribe((data) => {

      this.output=[];
      for (let i in data) {
        this.output.push(data[i].toString());
      }

      return this.output;
    });
    return ["an error has occurred"];
  }
}
