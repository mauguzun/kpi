import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./../../card/card.less']
})
export class TeamComponent implements OnInit {

  constructor(public service: TeamService) { }


  ngOnInit() {
  }



  public onSelected($event) {

    this.service.sortBy = $event.value;
    this.service.setupData();

    this.service.subtitle = this.service.selectArray.filter(x => x.value === $event.value)[0].text;
  }

}
