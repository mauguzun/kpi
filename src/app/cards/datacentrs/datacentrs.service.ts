import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { budgets } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DatacentrsService extends CardsService {


  constructor() {
    super();

    this.dataArray = [
      { name: 'Actives ', value: 143 },
      { name: 'Not actives ', value: 102 },
   
  ];
    this.title = 'Datacenters';
    this.subtitle = 'Datacenters prevision';


    this.loader = false;
  }



}
