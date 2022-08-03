import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
}

export const LogIn = createAction(
  AuthActionTypes.LOGIN,
  props<{ username: User["username"], password: User["password"] }>()
)

export const LogInSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ user: User }>()
)

export const LogInFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{message: string}>()
)