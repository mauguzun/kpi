import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { budgets } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends CardsService {


  constructor() {
    super();

    this.dataArray = budgets;
    this.title = 'Database';
    this.subtitle = 'Database prevision';


    this.loader = false;
  }



}
