import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(token: string, email: string) {
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
  }


  isLogin(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  name(): string {
    return localStorage.getItem('email');
  }

  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('token');
  }

}
