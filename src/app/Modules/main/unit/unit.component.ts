import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  @Input() unitName: string;

  constructor() { }

  ngOnInit() {
  }

}
