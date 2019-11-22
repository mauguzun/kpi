import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.servcie';

@Component({
  selector: 'app-database',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']
})

export class DatabaseComponent implements OnInit {

  constructor(public service: DatabaseService) { }

  ngOnInit() {
  }
  onSelected($event){}
}
