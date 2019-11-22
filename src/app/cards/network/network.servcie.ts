import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { tasks } from '../data';

@Injectable({
    providedIn: 'root'
})
export class NetworkService extends CardsService {


    constructor() {
        super();

        this.dataArray = [
            { name: 'Actives lines', value: 43 },
            { name: 'Not actives lines', value: 102 },
         
        ];
        this.title = 'Network';
        this.subtitle = 'Total Network Lines';


        this.loader = false;
    }



}
