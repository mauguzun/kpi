import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./../card.less']

})
export class FooterComponent implements OnInit {

  @Input() selectArray;
  constructor() { 
    console.log(this.selectArray)
  }

  ngOnInit() {
  }

}
