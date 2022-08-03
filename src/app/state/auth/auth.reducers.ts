import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/app/model/user";
import { LogIn, LogInSuccess, LogInFailure } from './auth.actions';

export interface State {
  isAuthenticated: boolean
  user: User | null
  errorMessage: string | null
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export const reducer = createReducer(
  initialState,
  on(LogIn, (state) => state),
  on(LogInSuccess, (state, { user } ) => {
    return {
      ...state,
      isAuthenticated: true,
      user: user,
      errorMessage: null
    }
  }),
  on(LogInFailure, (state, {message}) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      errorMessage: message
    }
  })
)