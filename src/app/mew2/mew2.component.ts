import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mew2',
  templateUrl: './mew2.component.html'
})
export class Mew2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(){
    alert("route me to /go");
  }
}
