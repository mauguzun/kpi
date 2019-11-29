import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [


  {
    path: '', component: AppComponent, children: [
      // { path: '', component: PageOneComponent, pathMatch: 'full' },
      { path: '', component: PageOneComponent },
      { path: 'two', component: PageTwoComponent },
      { path: 'not_found', component: PageTwoComponent }, 
      { path: 'table/:tab', component: TableComponent },
      { path: 'details/:tab', component: DetailsComponent },
      { path: 'details/:tab/:id', component: DetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
