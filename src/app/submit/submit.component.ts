import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from "../state.service";

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html'
})
export class SubmitComponent implements OnInit {

  constructor(private http: HttpClient, private state: StateService) { }

  ngOnInit() {
    this.state.getData().subscribe((data) => {

      this.state.clearData();

      for (let i in data) {
        this.state.output.push(data[i].toString());
      }

      //never called

      console.log(this.state.output);
    }, (err) => {
      console.log('error');
    });
  }

  ship() {
    let shippedData = [];


    for (let i = 0; i < this.state.output.length; i++) {
      console.log("pushing \"" + this.state.output[i] + "\" on to shippedData");
      shippedData.push(this.state.output[i]);
    }

    //console.log(shippedData);

    this.http.post("http://localhost:3000/api", shippedData).subscribe((data) => {
      console.log("response from server after hitting ship: " + data);
      this.state.clearData();
    });
  }
}
