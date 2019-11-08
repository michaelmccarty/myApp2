import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  userInput = new FormControl('data');

  constructor(private stateService: StateService) { }

  
  ngOnInit() {
  }



  ship() {    //ship current value of userInput

    this.stateService.postData("placeholder for userInput variable").subscribe((data) => {
      console.log("dataStore variable after ship: " + this.stateService.dataStore);

    }, (err) => {
      console.log('error');
    });

  }
}

