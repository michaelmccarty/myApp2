import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html'
})
export class OutputComponent implements OnInit {

  output: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/api").subscribe((data) => {
      this.output=JSON.stringify(data);
    });
    
  }

}
