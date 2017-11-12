import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-inverse">
            <div class="navbar-header navbar-right">
                <a href="/" class="navbar-brand"  >Cambridge Bio-Augmentation Systems</a>
            </div>
        </nav>
    `,
    styles: [ 
        `   
        .navbar-brand { color: #ffffff; }
        .jumbotron .glyphicon { font-size: 80px; }
        .navbar-inverse { background-color: #1468A8; }
        `
    ]
})

export class HeaderComponent {
     

}