import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApidataService } from '../apidata.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { toTypeScript } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-please-login',
  templateUrl: './please-login.component.html',
  styleUrls: ['./please-login.component.less']
})
export class PleaseLoginComponent implements OnInit {


  form: FormGroup;
  loader = false;
  message = 'Please Login';

  constructor(private apiSeervice: ApidataService,
    private router: Router,
    private http: HttpClient, private loginService: LoginService) { 

      if(loginService.isLogin()){ 
          this.router.navigate(['/'])
        }
    }

  ngOnInit() {


    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),

    })
  }


  submit() {

    if (this.form.invalid) {
      return;
    }

    this.message = 'Please Login';
    this.loader = true;

    this.http.post(this.apiSeervice.login(), {
      email: this.form.value.email,
      password: this.form.value.password
    }).subscribe(data => {

      console.log(data)
      this.loader = false;
      if (data['token']) {
        this.loginService.login(data['token'], data['email']);
        this.router.navigate(['/']);
      } else {
        this.message = data.toString();
      }
    })

  }
}
