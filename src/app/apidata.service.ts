import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  constructor() { }

  private main = 'http://localhost/kpi/public/';
  // private main = 'http://kpiserver.asl.nl.eu.org/';
  private controller = "";

  protected tables = [
    { title: 'Applications', table: 'applications' },
    { title: 'Backups', table: 'backups' },
    { title: 'Budget', table: 'budget' },
    { title: 'Certificates', table: 'certificates' },
    { title: 'Risks', table: 'risks' },
    { title: 'Project', table: 'project' },
    { title: 'Database', table: 'database' },
    { title: 'Network', table: 'network' },
    { title: 'Helpdescs', table: 'helpdescs' },
    { title: 'Soc', table: 'soc' },
    { title: 'Servers', table: 'servers' },
    { title: 'Task', table: 'task' },
    { title: 'It team', table: 'iteam' },
    { title: 'On promise', table: 'onpromise' },
    { title: 'Datacenters', table: 'datacenters' },
  ];


  base() {
    console.log(this.main);
    console.log(this.main + this.controller);
    

    return this.main + this.controller.replace('/','')  ;
  }

  delete(id) {
    return this.main + this.controller + 'delete/' + id;
  }

  show(id = null) {
    return this.main + this.controller + 'show/' + id;
  }

  put(id) {
    return this.main + this.controller + 'put/' + id;
  }
  post() {
    return this.main + this.controller + 'create/';
  }

  getTalbe(title: string): string {
    title = title.trim();
    return this.tables.filter(x => x.title === title)[0].table;
  }

  checkPage(table: string): boolean {
    table = table.trim();
    return this.tables.filter(x => x.table === table).length > 0;
  }
  setControlller(table: string) {
    this.controller = table + '/';
  }

}
