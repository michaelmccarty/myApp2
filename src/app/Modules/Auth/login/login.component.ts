import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  nick: string;
  pass: string;

  constructor(private authService: AuthService /**private formBuilder: FormBuilder*/) {}

  ngOnInit() {}

  onSubmit(inputName: string, inputPass: string) {
    this.nick = inputName;
    this.pass = inputPass;

    this.authService.postData({ nick: this.nick, pass: this.pass }).subscribe(reply => {
      console.log(reply);
    });
  }
}
