import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from '../Auth/login/login.component';

import { AuthService } from './auth.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [LoginComponent],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class AuthModule { }
