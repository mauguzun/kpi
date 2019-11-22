import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { budgets } from '../data';

@Injectable({
  providedIn: 'root'
})
export class BudgetService extends CardsService {


  constructor() {
    super();

    this.dataArray = budgets;
    this.title = 'Budget';
    this.subtitle = 'Budget prevision';


    this.loader = false;
  }



}
