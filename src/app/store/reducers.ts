import * as ChatReducer from './chat/chat.reducer';
import * as UserReducer from './user/user.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  userState: UserReducer.State;
  chatState: ChatReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  userState: UserReducer.userReducer,
  chatState: ChatReducer.chatReducer

};
