import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth.service';

import { CompareValidatorDirective } from './pwValidator.directive';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, CompareValidatorDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  bootstrap: [LoginComponent],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class AuthModule {}
