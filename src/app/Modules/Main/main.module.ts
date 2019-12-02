import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [DashComponent, NavComponent, ChatComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [DashComponent]
})
export class MainModule {}
