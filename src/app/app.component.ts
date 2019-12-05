import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild('sidenav', { static: true }) input;

  public title = 'kpi';
  public header = new Date();

  constructor(private router: Router,public login :LoginService) {

  }

  linkClick(link: string) {
    this.router.navigate([link])
  }

  logout(){
    this.login.logout();
  }
}


