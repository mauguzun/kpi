import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { tasks } from '../data';

@Injectable({
    providedIn: 'root'
})
export class BackupService extends CardsService {


    constructor() {
        super();

        this.dataArray = [
            { name: 'Ok', value: 132 },
            { name: 'Error', value: 123 }

        ];
        this.title = 'Backups';
        this.subtitle = 'Rubrik PA2';

        this.selectArray = [
            { value: 0, text: 'Rubrik PA2' },
            { value: 1, text: 'Rubrik SWORDSx' },
            { value: 2, text: 'Rubrik ASLB Today' },
            { value: 3, text: 'Rubrik ASLS  ' },
        ]

        this.loader = false;
    }

   

}
