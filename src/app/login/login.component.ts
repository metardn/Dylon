import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { LogInFailure, LogInSuccess, LogOut } from '../state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logo = "assets/logo.png"
  user: User = new User()

  constructor( private auth: AuthService,
    private store: Store<AppState>
     ) {
  }

  ngOnInit(): void {
  }

  testLogOut():void {
    this.store.dispatch(LogOut())
  }

  onSubmit(): void {
    const payload = {
      username: this.user.username,
      password: this.user.password
    }
    
    this.auth.loginUser(payload)
    .subscribe (
      res => {
        this.store.dispatch(LogInSuccess({user: res}))
        console.log(res)
        localStorage.setItem('token', res.token)
        this.user = res
      },
      err => {
        console.log(err)
        this.store.dispatch(LogInFailure(err))
      }
    )
  }
}
