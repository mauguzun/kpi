import { Component, OnInit } from '@angular/core';
import { BackupService } from './backup.servcie';

@Component({
  selector: 'app-backup',
  templateUrl: './../pie/pie.html',
  styleUrls: ['./../../card/card.less']

})
export class BackupComponent implements OnInit {

  constructor(public service: BackupService) {
  }

  ngOnInit() {
  }

  public onSelected($event) {

    this.service.subtitle = this.service.selectArray.filter(x => x.value === $event.value)[0].text;

    this.service.dataArray = [
      { name: 'Ok', value: Math.floor(Math.random() * 1222) },
      { name: 'Error', value: Math.floor(Math.random() * 1322) }

    ];


  }
}
