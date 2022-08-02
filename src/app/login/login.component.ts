import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { LogIn } from '../state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logo = "assets/logo.png"
  user: User = new User()

  constructor( private auth: AuthService,
     ) {
    
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = {
      username: this.user.username,
      password: this.user.password
    }
    // this.store.dispatch(new LogIn(payload))
    // console.log(this.user)
    this.auth.loginUser(payload)
    .subscribe (
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.user = res
      },
      err => {
        console.log(err)
      }
    )
  }

}
