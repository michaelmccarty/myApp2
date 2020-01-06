import * as ChatActions from './chat.actions';
import { ChatMessage } from "../../models/chatmessage.model";

export interface State {
  chatMessages: ChatMessage[];
}

const InitialState: State = {
  chatMessages: undefined
};

export function chatReducer(state = InitialState, action: ChatActions.All): State {
  switch (action.type) {
    case ChatActions.MESSAGE_SENT: {
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
