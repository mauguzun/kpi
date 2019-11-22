import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-server',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']

})
export class ServerComponent implements OnInit {


  constructor(public service: ServerService) {
  }

  ngOnInit() {
  }

}
