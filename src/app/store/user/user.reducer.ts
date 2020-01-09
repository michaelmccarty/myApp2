import * as UserActions from './user.actions';
import { ChatMessage } from "../../models/chatmessage.model";

export interface State {
  authorized: boolean;
}

const InitialState: State = {
  authorized: false
};

export function userReducer(state = InitialState, action: UserActions.All): State {
  switch (action.type) {
    case UserActions.SEND_MESSAGE: {
      return {
        ...state
      };
    }
    case UserActions.SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
