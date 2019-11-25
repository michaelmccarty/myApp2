import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { pwValidator } from '../pwValidator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      nick: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      pass2: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        pwValidator('pass') //make sure pass2 is equal to pass
      ])
    });
  }

  onFormSubmit() {
    this.router.navigateByUrl('/dash');

    this.authService.registerUser({
      nick: this.registerForm.get('nick').value,
      email: this.registerForm.get('email').value,
      pass: this.registerForm.get('pass').value
    });
  }
}
