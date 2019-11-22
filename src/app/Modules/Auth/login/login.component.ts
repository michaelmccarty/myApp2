import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../../Models/user.model';

//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService /**private formBuilder: FormBuilder*/) {}

  ngOnInit() {}

  onSubmit(inputEmail: string, inputPass: string) {
    this.user = new User(inputEmail, inputPass);

    this.authService.signIn(this.user).subscribe(reply => {
      console.log(reply);
    });
  }
}
