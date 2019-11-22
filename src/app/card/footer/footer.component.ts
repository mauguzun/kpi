import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./../card.less']

})
export class FooterComponent implements OnInit {

  @Output() someEvent = new EventEmitter();
  @Input() selectArray;
  
  constructor() { 
    console.log(this.selectArray)
  }

  ngOnInit() {
  }

}


