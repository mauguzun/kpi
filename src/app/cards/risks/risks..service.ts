import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { budgets } from '../data';

@Injectable({
  providedIn: 'root'
})
export class RisksService extends CardsService {


  constructor() {
    super();

    this.dataArray = budgets;
    this.title = 'Risks';
    this.subtitle = 'Total Risks';


    this.loader = false;
  }



}
