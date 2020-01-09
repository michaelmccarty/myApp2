import { tap } from 'rxjs/internal/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import * as fromRoot from '../../store/reducers';
import * as UserActions from './user.actions';
import { Action, Store } from '@ngrx/store';
import { switchMap,  map,  mergeMap,  catchError,  withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ChatService } from '../../modules/main/chat.service';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class UserEffects {
  constructor(
    private store$: Store<fromRoot.State>,
    private actions$: Actions,
    private router: Router,
    private chatService: ChatService,
    private authService: AuthService,
  ) { }

  @Effect()
  sendMessage$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.SEND_MESSAGE),
    switchMap((action: UserActions.SendMessageAction) => {

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
          if (response.valid === 'true') {
            return {
              type: UserActions.SEND_MESSAGE_SUCCESS,
              payload: { /**response: response,*/ chatMessage: action.payload }
            };
          }
        }),
        // If request fails, dispatch failed action
        catchError(error => {
          console.log(error);
          return of({
            type: UserActions.SEND_MESSAGE_FAILURE,
            payload: error
          });
        })
      );
    }),
    // If request fails, dispatch failed action
    catchError(error => {
      console.log(error);
      return of({
        type: UserActions.SEND_MESSAGE_FAILURE,
        payload: error
      });
    })
  );
}
