import * as io from 'socket.io-client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  socket;
  messages: string[];

  constructor() {}

  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('connected');
    });
  }

  onSubmit() {
    this.socket.emit('sendmessage', 'hi');
  }
}
