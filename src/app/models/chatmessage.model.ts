export class ChatMessage {
  id: number;
  user: string;
  msg: string;
  timestamp: Date;

  constructor(id: number, user: string, msg:string, timestamp:Date){
    this.id=id;
    this.user=user;
    this.msg=msg;
    this.timestamp=timestamp;
  }
}
