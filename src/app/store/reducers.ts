import * as ChatReducer from './chat/chat.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  chatState: ChatReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  chatState: ChatReducer.reducer
};
