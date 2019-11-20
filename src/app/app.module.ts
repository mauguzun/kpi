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


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,

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
