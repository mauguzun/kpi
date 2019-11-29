import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})


export class TableComponent implements OnInit {


  tableName = 'kpiteam';

  displayedColumns: string[] = null;
  dataSource: MatTableDataSource<any> = null;
  loader = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  constructor(private http: HttpClient, private snackBar: MatSnackBar,
    private activeRouter: ActivatedRoute,
    private router: Router, private api: ApidataService) {


    this.activeRouter.params.subscribe((params) => {

      if (params.tab && this.api.checkPage(params.tab)) {

        this.tableName = params.tab;
        this.api.setControlller(this.tableName);
        this.http.get(api.base()).subscribe(data => {

          let columns = [];
          columns = data['columns'];
          columns.push('d');

          this.displayedColumns = columns;

          this.dataSource = new MatTableDataSource(data['data']);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loader = false;
          this.snackBar.open('table loaded...', null, { duration: 2000 });
        });
      } else {
        this.router.navigate(['not_found']);
      }

    });


    // Assign the data to the data source for the table to render

  }

  ngOnInit() {

  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  delete(id: string) {


    this.loader = true;
    this.http.delete(this.api.delete(id)).subscribe(data => {
      let answer = 'deleted ';
      this.loader = false;
      if (data === 1) {
        this.dataSource.data = this.dataSource.data.filter(x => x.ID !== id);
      } else {
        answer = 'error';

      }

      this.snackBar.open(answer, null, { duration: 2000 });
    });
  }

  add() {
    this.router.navigate(['/details', this.tableName]);
  }
  edit(id) {

    this.router.navigate(['/details', this.tableName, id]);
  }


}
