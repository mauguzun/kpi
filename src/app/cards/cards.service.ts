import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  public title: string;
  public subtitle: string;
  public dataArray: { "name": string; "value": number; }[];
  public selectArray =  [
    { value: null, text: "can`t" }
  ]
  constructor() { }

  public  onSelect(){
    
  }
}
