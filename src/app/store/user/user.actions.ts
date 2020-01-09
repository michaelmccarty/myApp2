import { Action } from '@ngrx/store';

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';


export class SendMessageSuccessAction implements Action {
  readonly type = SEND_MESSAGE_SUCCESS;

  constructor(public payload: any) {}
}


export class SendMessageFailureAction implements Action {
  readonly type = SEND_MESSAGE_FAILURE;

  constructor(public payload: any) {}
}

export type All = SendMessageSuccessAction | SendMessageFailureAction;
// | LogOutAction
// | LogInSuccessAction
// | LogInFailureAction
// | ResetSessionAction
// | LogOutSuccessAction;
