import { Component, OnInit } from '@angular/core';
import { HelpdescService } from '../helpdesc/helpdesc.servcie';
import { SocService } from './soc.service';

@Component({
  selector: 'app-soc',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']
})


export class SocComponent implements OnInit {

  constructor(public service: SocService) { }

  ngOnInit() {
  }

}
