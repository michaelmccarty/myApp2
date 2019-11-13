import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';



@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule
  ],
  exports: [DashComponent]
})
export class MainModule { }
