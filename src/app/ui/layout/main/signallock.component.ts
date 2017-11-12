import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
//import * as _ from 'lodash';
//import { ChartService} from '../chart.service';
//import * as Plotly from 'plotly.js';
//Plotly js library has no typescript definitions. Declare var used to that the Plotly js library can be used inside the typescript class
//declare var Plotly: any;

@Component({
    selector: 'signallock',
    templateUrl: './signallock.component.html',
    styles: []
})

export class SignalLock  {
    constructor() {
        this.options = {
            title : { text : 'Signal Lock' },
            series: [{
                name: "Sensor 1",
                data: [29.9, 71.5, 106.4, 129.2]
            },{
                name: "Sensor 2",
                data: [2, 100, 86, 200]
            },{
                name: "Sensor 3",
                data: [88, 250, 100, 2]
            }
            ]
        };
    }
    options: Object;
   
}