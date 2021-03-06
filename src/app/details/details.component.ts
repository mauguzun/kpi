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
  formValid = false;

  constructor(
    private http: HttpClient,
    private current: ActivatedRoute,
    private api: ApidataService,
    private router: Router
  ) {


  }

  checkIsValid() {

    console.log(this.data.filter(x => x.req === true && x.value === '').length);
    console.log(this.data.filter(x => x.req === true && x.value === ''));
    

    this.formValid =  this.data.filter(x => x.req === true && x.value === '').length ===  0 ;

  }

  ngOnInit() {
    this.current.params.subscribe(data => {

      this.tableName = data.tab;
      this.api.setControlller(this.tableName);
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

    this.http.put(this.api.put(this.id), this.data).subscribe(res => {
      // todo updat or  ?
      this.loader = false;
      this.router.navigate(['/table', this.tableName]);
    })


  }
}
