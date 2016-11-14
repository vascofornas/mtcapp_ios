import { Component } from '@angular/core';

/*
  Generated class for the Actividad component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'actividad',
  templateUrl: 'actividad.html'
})
export class ActividadComponent {

  text: string;

  constructor() {
    //console.log('Hello Actividad Component');
    this.text = 'Hello World';
  }

}
