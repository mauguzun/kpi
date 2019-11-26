import { Component, OnInit } from '@angular/core';
import { DatacentrsService } from './datacentrs.service';

@Component({
  selector: 'app-datacentrs',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']
})
export class DatacentrsComponent implements OnInit {

  constructor(public service: DatacentrsService) { }

  ngOnInit() {
  }
  onSelected($event){}

}
