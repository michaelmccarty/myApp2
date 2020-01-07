import { Action } from '@ngrx/store';
import { ChatMessage } from '../../models/chatmessage.model';

///////////////
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';


export class SendMessageAction implements Action {
  readonly type = SEND_MESSAGE;

  constructor(public payload: ChatMessage ) {}
}

export class SendMessageSuccessAction implements Action {
  readonly type = SEND_MESSAGE_SUCCESS;

  constructor(public payload: ChatMessage ) {}
}

export type All =
  | SendMessageAction
  | SendMessageSuccessAction;
  // | LogOutAction
  // | LogInSuccessAction
  // | LogInFailureAction
  // | ResetSessionAction
  // | LogOutSuccessAction;;
