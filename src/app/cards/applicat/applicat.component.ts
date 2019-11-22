import { Component, OnInit } from '@angular/core';
import { ApplicatService } from './applicat.servcie';

@Component({
  selector: 'app-applicat',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']

})
export class ApplicatComponent implements OnInit {

  constructor(public service: ApplicatService) {
  }

  ngOnInit() {
  }
  onSelected($event){}
}
