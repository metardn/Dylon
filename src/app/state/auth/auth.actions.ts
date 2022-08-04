import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user';

export enum AuthActionTypes {
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
}

export const LogInSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ user: User }>()
)

export const LogInFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{message: string}>()
)

export const LogOut = createAction(
  AuthActionTypes.LOGOUT
)