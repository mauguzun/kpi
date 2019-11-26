import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @ViewChild('sidenav', { static: true }) input;

  public title = 'kpi';
  public header = new Date();

  constructor(private router: Router) {

  }

  linkClick(link: string) {
    console.log(this.input.toggle());
    console.log(link);
    this.router.navigate([link])
  }
}


