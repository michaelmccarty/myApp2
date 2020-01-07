import { tap } from 'rxjs/internal/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import * as fromRoot from '../../store/reducers';
import * as ChatActions from './chat.actions';
import { Action, Store } from '@ngrx/store';
import { switchMap,  map,  mergeMap,  catchError,  withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ChatService } from '../../modules/main/chat.service';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class ChatEffects {
  constructor(
    private store$: Store<fromRoot.State>,
    private actions$: Actions,
    private router: Router,
    private chatService: ChatService,
    private authService: AuthService,
  ) { }

  @Effect()
  sendMessage$: Observable<Action> = this.actions$.pipe(
    ofType(ChatActions.SEND_MESSAGE),
    switchMap((action: ChatActions.SendMessageAction) => {

      const req = {
        id: action.payload.id,
        user: action.payload.user,
        msg: action.payload.msg,
        timestamp: action.payload.timestamp,
      };
      return this.chatService.sendMessage(req).pipe(
        // If successful, dispatch success action with result
        map(response => {

          console.log(response);
          if (response.isTempPassword === 'Y') {
            return {
              type: UserActions.UPDATE_PASSWORD,
              payload: { response: response, admin: action.payload.admin }
            };
          } else if (response.authenticated) {
            return {
              type: UserActions.LOGIN_SUCCESS,
              payload: { response: response, admin: action.payload.admin }
            };
          } else {
            return {
              type: UserActions.LOGIN_FAILURE,
              payload: { response: response, admin: action.payload.admin }
            };
          }
        }),
        // If request fails, dispatch failed action
        catchError(error => {
          console.log(error);
          return of({
            type: UserActions.LOGIN_FAILURE,
            payload: error
          });
        })
      );
    }),
    // If request fails, dispatch failed action
    catchError(error => {
      console.log(error);
      return of({
        type: UserActions.LOGIN_FAILURE,
        payload: error
      });
    })
  );
}
