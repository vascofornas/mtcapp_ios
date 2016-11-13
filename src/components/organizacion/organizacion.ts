import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import Organizacion from '../../models/organizacion';

import { OrganizacionesPage } from '../../pages/organizaciones/organizaciones';

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

  @Input() modo : string;

  constructor(public navCtrl: NavController) {
    //console.log(this.modo);
  }

  cargarOrganizacion(url){
    this.navCtrl.push(OrganizacionesPage, {url: url});
  }
  
}
