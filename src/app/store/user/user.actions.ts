import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) {}
}


export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class LoginFailureAction implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}
}

export type All = LoginAction | LoginSuccessAction | LoginFailureAction;
// | LogOutAction
// | LogInSuccessAction
// | LogInFailureAction
// | ResetSessionAction
// | LogOutSuccessAction;
