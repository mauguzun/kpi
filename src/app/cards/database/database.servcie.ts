import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { tasks } from '../data';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService extends CardsService {


    constructor() {
        super();

        this.dataArray = [
            {
                'name': 'Active',
                'value': 11
            },
            {
                'name': 'Unactive',
                'value': 34
            },

        ];
        this.title = 'Database';
        this.subtitle = 'Active/Unactive';


        this.loader = false;
    }



}
