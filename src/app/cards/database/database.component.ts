import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./../../card/card.less']
})
export class DatabaseComponent implements OnInit {

  constructor(public service: DatabaseService) { }

  ngOnInit() {
  }
  onSelected($event) {

  }
}
