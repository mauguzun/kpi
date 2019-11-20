import { Injectable } from '@angular/core';
import { CardsService } from '../cards.service';
import { tasks } from '../data';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends CardsService {


  constructor() {
    super();

    this.dataArray = tasks
    this.title = "Task";
    this.subtitle = "Total Tasks";

  }



}
