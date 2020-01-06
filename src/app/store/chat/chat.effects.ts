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
//import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class ChatEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    // private authService: AuthService,
    private store$: Store<fromRoot.State>
  ) { }

  @Effect()
  messageSent$: Observable<Action> = this.actions$.pipe(
    ofType(ChatActions.MESSAGE_SENT),
    switchMap((action: ChatActions.MessageSentAction) => {
      this.authService.checkAppVersion();

      const req = {
        id: action.payload.id,
        user: action.payload.user,
        msg: action.payload.msg,
        timestamp: action.payload.timestamp,
      };
      return this.apiService.login(req).pipe(
        // If successful, dispatch success action with result
        map(response => {
          this.configService.hideNewVersionMessage();
          console.log(response);
          // verify - update password page
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

  @Effect({ dispatch: false })
  LogInSuccess$: Observable<any> = this.actions$.pipe(
    ofType(UserActions.LOGIN_SUCCESS),
    tap(action => {
      // previously used to also set token in localStorage
      // but now used to just navigate if the login was successful

      localStorage.setItem('token', action.payload.response.token);
      this.router.navigate(['/pages/clients']);
    })
  );

  @Effect()
  chooseClient$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.CHOOSE_CLIENT),
    switchMap((action: UserActions.ChooseClientAction) => {
      const req = {
        application: action.payload
      };

      return this.apiService.getSystemDefaults(req).pipe(
        // If successful, dispatch success action with result
        map(response => {
          this.configService.hideNewVersionMessage();
          localStorage.setItem('application', action.payload);
          return {
            type: UserActions.CHOOSE_CLIENT_SUCCESS,
            payload: response
          };
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of({
            type: UserActions.LOGIN_FAILURE,
            payload: error
          })
        )
      );
    })
  );

  @Effect()
  public LogOut$: Observable<any> = this.actions$.pipe(
    ofType(UserActions.LOGOUT),
    // withLatestFrom(this.store$.select(state => state.userState.user)),
    switchMap((action: UserActions.LogOutAction) => {
        // if (action.payload.newVersion) {
        //   this.store$.dispatch(new UserActions.ResetSessionAction());
        //   this.store$.dispatch(
        //     new UserActions.UpdateVersionAction(action.payload.version)
        //   );
        //   this.configService.displayNewVersionMessage();
        // }

        this.authService.cancelSessionTimer();
        this.authService.cancelTokenRenewal();
        // close all modals, dont do it now.
        // this.modalService.closeAllModals();
        localStorage.removeItem('token');
        localStorage.removeItem('application');
        this.router.navigate(['/pages/login']);

        return of({
          type: UserActions.LOGOUT_SUCCESS
        });
      }
    )
  );

  @Effect({ dispatch: false })
  public chooseClientSuccess$: Observable<any> = this.actions$.pipe(
    ofType(UserActions.CHOOSE_CLIENT_SUCCESS),
    tap(() => {
      this.router.navigate(['/full-layout']);
    })
  );

  @Effect({ dispatch: false })
  public ResetSession$: Observable<any> = this.actions$.pipe(
    ofType(UserActions.RESET_SESSION),
    tap(() => {
      // this.configService.hideErrorMessage();
      // this.store$.dispatch(new VehicleActions.ResetProductFormAction());
      // this.store$.dispatch(new ProductActions.ResetProductsAction());
      // this.store$.dispatch(new CartActions.ResetCartAction());
    })
  );
}
