import * as io from 'socket.io-client';
import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import { ChatMessage } from 'src/app/models/chatmessage.model';
import * as ChatActions from '../../../store/chat/chat.actions';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  socket: SocketIOClient.Socket;
  chatMessages: ChatMessage[];
  chatMessage: string;

  constructor(private store$: Store<fromRoot.State>, private chatService: ChatService) {}

  ngOnInit() {

    this.socket = io('http://localhost:3000');
    this.socket.on('message', data => {
      console.log('message: ' + data);
    });


    //retrieve all messages from the store
    this.store$
    .pipe(select(store => store.chatState.chatMessages))
    .subscribe((data: ChatMessage[]) => {
      this.chatMessages = data;
    });

  }

  onSubmit() {


    this.socket.emit('message', this.socket.id + ': ' + this.chatMessage);

    let req:ChatMessage = new ChatMessage(23423,"sjobbs", this.chatMessage, new Date());

    this.store$.dispatch(new ChatActions.SendMessageAction(req));

    //this.chatService.sendMessage(req);

  }
}
