import {Component }from '@angular/core';

import {NavbarComponent}from './navbar/navbar.component';

@Component( {
selector:'my-app',
templateUrl:"./app/template/app.html",
directives:[NavbarComponent]

})

export class AppComponent {

}
