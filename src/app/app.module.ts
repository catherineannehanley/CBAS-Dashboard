import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
//import { ChartService} from '../chart.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './ui/layout/header/header.component';
import { MainComponent } from './ui/layout/main/main.component';
import { SidenavComponent } from './ui/layout/sidenav/sidenav.component';
import { SignalLock } from './ui/layout/main/signallock.component';
import { WelcomeComponent } from './ui/layout/main/welcome.component';
import { DinosaurComponent } from './ui/layout/main/dinosaur.component';


//import * as Plotly from 'plotly.js'; 

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidenavComponent,
    SignalLock,
    WelcomeComponent,
    DinosaurComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ChartModule.forRoot(require('highcharts')),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
