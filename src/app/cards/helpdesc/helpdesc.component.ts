import { Component, OnInit } from '@angular/core';
import { HelpdescService } from './helpdesc.servcie';

@Component({
  selector: 'app-helpdesc',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']
})


export class HelpdescComponent implements OnInit {

  constructor(public service: HelpdescService) { }

  ngOnInit() {
  }

}
