import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';


const routes: Routes = [


  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: '/one', pathMatch: 'full' },
      { path: 'one', component: PageOneComponent },
      { path: 'two', component: PageTwoComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
