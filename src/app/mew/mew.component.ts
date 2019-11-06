import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mew',
  templateUrl: './mew.component.html'
})
export class MewComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  go(){
    this.http.post("http://localhost:3000/go", {'word': 'yes'}).subscribe((data)=>{
      console.log(data);
    });
    
  }
}
