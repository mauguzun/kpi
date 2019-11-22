import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']
})
export class TaskComponent implements OnInit {

  constructor(public service: TaskService) {

  }

  ngOnInit() {
  }


  onSelected($event){}
  
}
