import { Component, Input } from '@angular/core';

import Organizacion from '../../models/organizacion';

import { ENV } from '../../config/environment';

/*
  Generated class for the Organizacion component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'organizacion',
  templateUrl: 'organizacion.html'
})
export class OrganizacionComponent {

  public urlBase : string = ENV.API_URL;

  @Input() isEven : boolean;
  @Input() organizacion : Organizacion;

  constructor() {
    
  }

}
