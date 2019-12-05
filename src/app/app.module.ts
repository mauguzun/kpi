import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatGridListModule, MatPaginatorModule,
  MatCheckboxModule, MatSidenavModule, MatIconModule,
  MatCardModule, MatToolbarModule, MatSelectModule,
  MatSnackBarModule, MatTableModule, MatFormFieldModule,
  MatInputModule, MatSortModule,
    
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';


import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { HeaderComponent } from './card/header/header.component';
import { FooterComponent } from './card/footer/footer.component';
import { TaskComponent } from './cards/task/task.component';
import { BudgetComponent } from './cards/budget/budget.component';
import { TeamComponent } from './cards/team/team.component';
import { LoaderComponent } from './card/loader/loader.component';
import { ServerComponent } from './cards/server/server.component';
import { HelpdescComponent } from './cards/helpdesc/helpdesc.component';
import { SocComponent } from './cards/soc/soc.component';
import { RisksComponent } from './cards/risks/risks.component';
import { BackupComponent } from './cards/backup/backup.component';
import { DatabaseComponent } from './cards/database/database.component';
import { ApplicatComponent } from './cards/applicat/applicat.component';
import { NetworkComponent } from './cards/network/network.component';
import { ProjectComponent } from './cards/project/project.component';
import { CertificatsComponent } from './cards/certificats/certificats.component';
import { DatacentrsComponent } from './cards/datacentrs/datacentrs.component';
import { OnPromiseComponent } from './cards/on-promise/on-promise.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { PleaseLoginComponent } from './please-login/please-login.component';





const intProvider  : Provider = {
  provide:HTTP_INTERCEPTORS,
  multi:true,
  useClass :AuthInterceptor
} 


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    BudgetComponent,
    TeamComponent,
    LoaderComponent,
    ServerComponent,
    HelpdescComponent,
    SocComponent,

    RisksComponent,
    BackupComponent,

    DatabaseComponent,
    ApplicatComponent,
    NetworkComponent,
    ProjectComponent,
    CertificatsComponent,
    DatacentrsComponent,
    OnPromiseComponent,
    TableComponent,
    DetailsComponent,
    PleaseLoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    NgxChartsModule,
    MatTableModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],

  providers: [intProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
