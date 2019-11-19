import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html'
})
export class DataFormComponent implements OnInit {


  data= new FormControl('');
  @Output()  submitEvent = new EventEmitter<string>();

  submit(){
    this.submitEvent.emit(this.data.value);

  }
  ngOnInit() {
  }

}
