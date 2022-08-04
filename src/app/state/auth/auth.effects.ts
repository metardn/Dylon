import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap, concatMap } from 'rxjs';
import { User } from 'src/app/model/user';
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

  LogInSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(LogInSuccess),
      tap(() => {
        console.log('effect success')
        this.router.navigate(['/'])
      })
    )
  })
// LogIn = createEffect(() => {
//   return this.actions.pipe(
//     concatMap((action) =>
//       this.authService.loginUser(action).pipe(
//         map((user) => 
//           LogInSuccess({user: user}),
//           console.log("effect success")
//         ),
//         catchError((error) => of(LogInFailure({message: error})))
//       )
//     )
//   )
// })

}