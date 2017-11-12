import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './ui/layout/header/header.component';
import { MainComponent } from './ui/layout/main/main.component';
import { SidenavComponent } from './ui/layout/sidenav/sidenav.component';
import { WelcomeComponent } from './ui/layout/main/welcome.component';
import { SignalLock } from './ui/layout/main/signallock.component';
import { DinosaurComponent } from './ui/layout/main/dinosaur.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
  title = 'app';
}
