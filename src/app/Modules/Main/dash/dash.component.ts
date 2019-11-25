import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  data = ['data1', 'data2'];

  constructor() {}

  ngOnInit() {}

  receiveMessage($event) {
    this.data.push($event);
  }
}
