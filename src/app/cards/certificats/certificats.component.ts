import { Component, OnInit } from '@angular/core';
import { CertificatsService } from './certificats.service';

@Component({
  selector: 'app-certificats',
  templateUrl: './certificats.component.html',
  styleUrls: ['./../../card/card.less']
})
export class CertificatsComponent implements OnInit {

  constructor(public service: CertificatsService) { }

  ngOnInit() {
  }
  onSelected($event) {

  }

}
