import * as io from 'socket.io-client';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, AfterViewInit {
  socket: SocketIOClient.Socket;
  messages: string[];

  constructor(private chatService: ChatService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.socket = io('http://localhost:3000');
    this.socket.on('message', data => {
      console.log('message: ' + data);
    });
  }

  onSubmit(message: string) {
    this.socket.emit('message', this.socket.id + ': ' + message);
  }
}
