import { Component, OnInit } from '@angular/core';
import { RisksService } from './risks..service';

@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./../../card/card.less']
})
export class RisksComponent implements OnInit {

  constructor(public service : RisksService) { }

  ngOnInit() {
  }
  onSelected($event) {

  }
}
