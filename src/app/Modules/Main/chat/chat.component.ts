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
    this.socket = io.connect('http://localhost:3000');
    this.socket.on('message-received', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });
  }

  onSubmit() {
    this.socket.emit('sendmessage', 'hi');
  }
}
