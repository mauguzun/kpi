import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  private main = 'http://localhost/kpi/public/';
  constructor() { }


  public base() {
    return this.main;
  }

  public delete(id) {
    return this.main + 'delete/' + id;
  }

  public show(id = null){
    
    return this.main + 'show/' + id;
  }

  public put(id){
    return this.main + 'put/' + id;
  }
  public post(){
    return this.main + 'create/' ;
  }
}
