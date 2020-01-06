import { Action } from '@ngrx/store';
import { ChatMessage } from '../../models/chatmessage.model';

///////////////
export const MESSAGE_SENT = 'MESSAGE_SENT';


export class MessageSentAction implements Action {
  readonly type = MESSAGE_SENT;

  constructor(public payload: ChatMessage ) {}
}

export type All =
  | MessageSentAction;
  // | LogOutAction
  // | LogInSuccessAction
  // | LogInFailureAction
  // | ResetSessionAction
  // | LogOutSuccessAction;;
