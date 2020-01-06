import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ChatComponent } from './chat/chat.component';
import { ChatlogComponent } from './chatlog/chatlog.component';
import { MessageComponent } from './message/message.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [DashComponent, NavComponent, ChatComponent, ChatlogComponent, MessageComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [ChatService],
  exports: [DashComponent]
})
export class MainModule {}
