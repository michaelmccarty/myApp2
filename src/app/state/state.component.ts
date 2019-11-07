import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html'
})
export class StateComponent implements OnInit {

  constructor(private myData: string[], private http: HttpClient) { }

  ngOnInit() {
      
  }

}
