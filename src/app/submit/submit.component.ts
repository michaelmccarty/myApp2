import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html'
})
export class SubmitComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  go() {
    this.http.post("http://localhost:3000/go", { 'fullstack': 'yes' }).subscribe((data) => {
      console.log(data);
    });
  }
}