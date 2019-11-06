import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mew',
  templateUrl: './mew.component.html'
})
export class MewComponent implements OnInit {

  test="before test";
  constructor() {
    this.test="after test";
   }

  ngOnInit() {
  }

  go(){
    console.log(this.test);
  }
}
