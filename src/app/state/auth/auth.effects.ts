import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';

import {
  AuthActionTypes,
  LogInFailure, LogInSuccess, 
} from '../auth/auth.actions';


@Injectable()
export class AuthEffects {
constructor(
  private actions: Actions,
  private authService: AuthService,
  private router: Router,
) {}

//   // effects go here

  // LogIn = createEffect(() => {
  //   return this.actions.pipe(
  //     map((action: LogIn) => action.payload)
  //     .switchMap((payload => {
  //       return this.authService.logIn(payload.username, payload.password)
  //       .map((user) => {
  //         console.log(user);
  //         return new LogInSuccess({token: user.token, username: payload.username});
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         return Observable.of(new LogInFailure({ error: error }));
  //       })
  //     }))
  //   )
  // })

}