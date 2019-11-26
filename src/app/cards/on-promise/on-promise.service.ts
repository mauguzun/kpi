import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { budgets } from '../data';

@Injectable({
  providedIn: 'root'
})
export class OnPromiseService extends CardsService {


  constructor() {
    super();

    this.dataArray = budgets;
    this.title = 'On promise';
    this.subtitle = 'Cotntract till / price';


    this.loader = false;
  }



}
