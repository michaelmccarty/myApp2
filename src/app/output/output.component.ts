import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../state.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html'
})
export class OutputComponent implements OnInit {

  output: string[];

  constructor(private http: HttpClient, private stateService: StateService) {
    
  }

  ngOnInit() {

    this.stateService.getData().subscribe((data) => {

      this.stateService.clearData();

      for (let i in data) {
        this.stateService.dataStore.push(data[i].toString());
      }

      console.log(this.stateService.dataStore);
    }, (err) => {
      console.log('error');
    });

  }

}
