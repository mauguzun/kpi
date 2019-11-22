import { Component, OnInit } from '@angular/core';
import { BudgetService } from './budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./../../card/card.less']

})
export class BudgetComponent implements OnInit {

  constructor(public service: BudgetService) {

  }

  ngOnInit() {
  }

}
