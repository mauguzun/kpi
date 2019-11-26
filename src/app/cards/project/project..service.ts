import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { budgets } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CardsService {


  constructor() {
    super();

    this.dataArray = budgets;
    this.title = 'Project';
    this.subtitle = 'Total projects';


    this.loader = false;
  }



}
