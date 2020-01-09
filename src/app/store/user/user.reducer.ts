import * as UserActions from './user.actions';
import { User } from 'src/app/models/user.model';

export interface State {
  authorized: boolean;
  user: User;
}

const InitialState: State = {
  authorized: false,
  user: undefined
};

export function userReducer(state = InitialState, action: UserActions.All): State {
  switch (action.type) {
    case UserActions.LOGIN: {
      return {
        ...state
      };
    }
    case UserActions.LOGIN_SUCCESS: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
