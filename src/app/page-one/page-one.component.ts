import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.less']
})
export class PageOneComponent implements OnInit {

  single: any[];

  multi: any[];
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor() {

    Object.assign(this, { single })
    Object.assign(this, { multi })

  }

  ngOnInit() {
  }
  onSelect(event:Event) {
    alert('We show all data !');
     
  }
}
