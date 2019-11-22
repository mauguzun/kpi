
import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';

@Injectable({
    providedIn: 'root'
})
export class SocService extends CardsService {


    constructor() {
        super();

        this.dataArray = [
            { name: ' Alerts today', value: 123 }, { name: 'Attack today', value: 99 }, { name: 'Email alert today', value: 123 }
        ];
        this.title = 'Soc';
        this.subtitle = 'Total of Soc';


        this.loader = false;
    }



}
