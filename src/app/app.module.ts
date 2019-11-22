import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCheckboxModule, MatSidenavModule, MatIconModule, MatCardModule, MatToolbarModule, MatSelectModule, MatSnackBarModule
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
import { ProjectsComponent } from './cards/projects/projects.component';
import { DatabaseComponent } from './cards/database/database.component';
import { ApplicatComponent } from './cards/applicat/applicat.component';
import { NetworkComponent } from './cards/network/network.component';


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
    ProjectsComponent,
    DatabaseComponent,
    ApplicatComponent,
    NetworkComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule, MatSnackBarModule,
    NgxChartsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
