import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

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
