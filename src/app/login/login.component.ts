import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { LogIn, LogInSuccess } from '../state/auth/auth.actions';

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

  onSubmit(): void {
    const payload : User = {
      username: this.user.username,
      password: this.user.password
    }
    // this.store.dispatch(LogInSuccess(payload))
    
    // console.log(payload)
    // this.auth.loginUser(payload)
    // .subscribe (
    //   res => {
    //     console.log(res)
    //     localStorage.setItem('token', res.token)
    //     this.user = res
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
  }

}
