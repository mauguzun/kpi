import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { tasks } from '../data';

@Injectable({
    providedIn: 'root'
})
export class ApplicatService extends CardsService {


    constructor() {
        super();

        this.dataArray = [
            {
                'name': 'Actives Applications',
                'value': 16
            },
            {
                'name': 'Not Actives Applications',
                'value': 12
            },

        ];
        this.title = 'Application';
        this.subtitle = 'Total of Actives Applications';


        this.loader = false;
    }



}
