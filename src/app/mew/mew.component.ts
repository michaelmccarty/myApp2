import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mew',
  templateUrl: './mew.component.html'
})
export class MewComponent implements OnInit {

  test: any="hello";
  constructor() {
    this.test=2;
   }

  ngOnInit() {
  }

  go(){
    console.log(this.test);
  }
}
