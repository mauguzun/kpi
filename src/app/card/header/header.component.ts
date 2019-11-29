import { Component, OnInit, Input } from '@angular/core';
import { ApidataService } from 'src/app/apidata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../card.less']
})
export class HeaderComponent implements OnInit {


  @Input() title;
  @Input() subtitle;
  constructor(private apiService: ApidataService, private router: Router) { }

  ngOnInit() {
  }
 
  open() {
    this.router.navigate(['table', this.apiService.getTalbe(this.title)])
  }
}
