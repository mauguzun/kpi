import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  public loader = true;
  public title: string;
  public subtitle: string;
  public dataArray: any[];

  public selectArray = [
    { value: null, text: "can`t" }
  ]
  constructor() { }

  public onSelect() {

  }

  public click($event) {
    console.log($event.value);
  }

  
}
