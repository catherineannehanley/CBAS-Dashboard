import { Component } from '@angular/core';
import { NgModule } from '@angular/core'; 
//import { RouterModule, Routes } from '@angular/router';



@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styles: [ 
        `.navbar-brand {
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 200px;
          background-color: #ffffff;
      }
      
      a {
          display: block;
          color: #000;
          padding: 8px 16px;
          text-decoration: none;
      }
      
      /* Change the link color on hover */
      a:hover {
          background-color: #555;
          color: white;
      }` ]
})

export class SidenavComponent {
     
}

