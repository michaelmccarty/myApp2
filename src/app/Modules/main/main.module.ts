import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [DashComponent, FormComponent],
  imports: [
    CommonModule
  ],
  exports: [DashComponent]
})
export class MainModule { }
