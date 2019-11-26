import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { users, tasks } from '../data';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends CardsService {


  public sortBy = 'Location';

  constructor() {
    super();


    this.title = 'It team ';
    this.subtitle = 'Sort by location';



    this.selectArray = [
      { value: 'Location', text: 'Sort by location' },
      { value: 'Job title', text: 'Sort by job' },
    ];

    this.setupData();
    this.loader = false;

  }

  setupData() {


    this.loader = true;
    this.dataArray = [];

    const location = users.reduce((obj, v) => {
      obj[v[this.sortBy]] = (obj[v[this.sortBy]] || 0) + 1;
      return obj;
    }, {})

    for (const name in location) {
      if (location.hasOwnProperty(name)) {
        this.dataArray.push({ name, value :  location[name] })
      }
    }

    this.loader = false;

  }

}
