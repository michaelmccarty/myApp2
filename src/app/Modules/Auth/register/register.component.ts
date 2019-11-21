import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      nick: new FormControl(),
      email: new FormControl(),
      pass: new FormControl(),
      pass2: new FormControl()
    });
  }

  onFormSubmit() {
    this.router.navigateByUrl('/dash');

    this.authService
      .registerUser({
        nick: this.registerForm.get('nick').value,
        email: this.registerForm.get('email').value,
        pass: this.registerForm.get('pass').value
      })
      .subscribe(reply => {
        console.log(reply);
      });
  }
}
