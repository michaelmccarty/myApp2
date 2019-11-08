import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from "../state.service";

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html'
})
export class SubmitComponent implements OnInit {

  constructor(private http: HttpClient, private stateService: StateService) { }

  
  ngOnInit() {

  }



  ship() {


    let shippedData = [];


    for (let i = 0; i < this.stateService.dataStore.length; i++) {
      //console.log("pushing \"" + this.state.output[i] + "\" on to shippedData");
      shippedData.push(this.stateService.dataStore[i]);
    }



    this.http.post("http://localhost:3000/api", shippedData).subscribe((data) => {
      //console.log("response from server after hitting ship: " + data);
      this.stateService.clearData();
    });
  }

}
