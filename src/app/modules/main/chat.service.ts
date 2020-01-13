import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from 'src/app/models/chatmessage.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private store$: Store<fromRoot.State>, private http: HttpClient) { }


  sendMessage(req: ChatMessage):Observable<any>{
    return this.http.post('http://localhost:3000/chat', req);
  }
}
