import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { UnitComponent } from './unit/unit.component';
import { UnitsComponent } from './units/units.component';


@NgModule({
  declarations: [DashComponent, FormComponent, UnitComponent, UnitsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashComponent]
})
export class MainModule { }
