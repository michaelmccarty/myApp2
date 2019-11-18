import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html'
})
export class UnitsComponent implements OnInit {

  @Input() units: string[];

  constructor() { }

  ngOnInit() {
  }

}
