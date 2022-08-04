import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/model/user";
import { LogInSuccess, LogInFailure, LogOut } from './auth.actions';

export interface State {
  isAuthenticated: boolean
  user: User | null
  token: User["token"] | null
  errorMessage: string | null
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  token: null,
  errorMessage: null
};

export const reducer = createReducer(
  initialState,
  on(LogInSuccess, (state, { user } ) => {
    return {
      ...state,
      isAuthenticated: true,
      user: user,
      token: user.token,
      errorMessage: null
    }
  }),
  on(LogInFailure, (state, {message}) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      token: null,
      errorMessage: message
    }
  }),
  on(LogOut, (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      token: null,
      errorMessage: null
    }
  })
)