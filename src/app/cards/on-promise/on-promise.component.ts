import { Component, OnInit } from '@angular/core';
import { OnPromiseService } from './on-promise.service';

@Component({
  selector: 'app-on-promise',
  templateUrl: './on-promise.component.html',
  styleUrls: ['./../../card/card.less']
})
export class OnPromiseComponent implements OnInit {

  constructor(public service: OnPromiseService) { }

  ngOnInit() {
  }
  onSelected($event) {

  }

}
