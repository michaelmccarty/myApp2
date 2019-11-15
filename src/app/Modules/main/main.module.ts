import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashComponent]
})
export class MainModule { }
