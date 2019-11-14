import { Component, OnInit } from '@angular/core';

//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;

  constructor(/**private formBuilder: FormBuilder*/) { }

  ngOnInit() {

  }

  onSubmit(inputName:string, inputPass: string){
    this.user = inputName;
    this.pass= inputPass;

    // show Main module, hide Auth module
  }

}
