import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  userInput = new FormControl('');
  
  constructor() {

  }

  ngOnInit() {
    
  }
}

