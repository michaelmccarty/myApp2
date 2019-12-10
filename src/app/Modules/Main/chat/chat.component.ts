/// <reference path="node_modules\@types\socket.io-client\index.d.ts" />
import * as io from 'socket.io-client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  socket: SocketIOClient;
  messages: string[];

  constructor() {}

  ngOnInit() {
    this.socket = io('http://localhost:3000').connect;
    // this.socket.on('connect', () => {
    //   console.log('connected');
    // });
  }

  onSubmit() {
    this.socket.emit('message', 'hi');
  }
}
