import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../apidata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  form: FormGroup;
  data = null;
  tableName = null;
  id = null;
  loader = true;

  constructor(
    private http: HttpClient,
    private current: ActivatedRoute, 
    private api: ApidataService,
    private router: Router
    ) {


  }


  ngOnInit() {
    this.current.params.subscribe(data => {

      this.tableName = data.tab;
      if (data.id) {
        this.id = data.id;
      }
      this.http.get(this.api.show(this.id)).subscribe(data => {
        this.data = data;
        this.loader = false;

      })

    })
  }
  submit() {

    this.loader = true;

      this.http.put(this.api.put(this.id), this.data ).subscribe(res => {
        // todo updat or  ?
        this.loader = false;
        this.router.navigate(['/table',this.tableName]);
      })
   

  }
}
