import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html'
})
export class DataFormComponent implements OnInit {


  data= new FormControl('');

  submit(){
    
  }
  ngOnInit() {
  }

}
