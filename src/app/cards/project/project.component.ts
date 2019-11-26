import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project..service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./../../card/card.less']
})
export class ProjectComponent implements OnInit {

  constructor(public service : ProjectService) { }

  ngOnInit() {
  }
  onSelected($event) {

  }
}
