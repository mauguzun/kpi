import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network.servcie';

@Component({
  selector: 'app-network',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']
})


export class NetworkComponent implements OnInit {

  constructor(public service: NetworkService) { }

  ngOnInit() {
  }
}