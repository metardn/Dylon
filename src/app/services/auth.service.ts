import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable()
export class AuthService {
  private baseUrl = "https://dummyjson.com/auth/login";
  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token')
  }

  logIn(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl, user)
  }

  loginUser (user: any) {
    return this.http.post<any>(this.baseUrl, user)
  }

}