import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { RouterModule } from '@angular/router';
import { UnitComponent } from './unit/unit.component';
import { UnitsComponent } from './units/units.component';
import { DataFormComponent } from './data-form/data-form.component';


@NgModule({
  declarations: [DashComponent, UnitComponent, UnitsComponent, DataFormComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashComponent]
})
export class MainModule { }
