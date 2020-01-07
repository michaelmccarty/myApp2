import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from 'src/app/models/chatmessage.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }


  sendMessage(req: ChatMessage):Observable<any>{
    return this.http.post('http://localhost:3000/chat', req);
  }
}
