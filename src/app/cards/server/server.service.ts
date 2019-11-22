import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { tasks } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ServerService extends CardsService {


  constructor() {
    super();

    this.dataArray = [
      { name: 'Active', value: 123 }, { name: 'Disabled', value: 99 }
    ];
    this.title = 'Servers';
    this.subtitle = 'Total of Actif/Un Active Prod servers';


    this.loader = false;
  }



}
