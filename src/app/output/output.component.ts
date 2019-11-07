import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html'
})
export class OutputComponent implements OnInit {

  output: string;

  constructor() { }

  ngOnInit() {
    this.output="Default Output";
  }

}
