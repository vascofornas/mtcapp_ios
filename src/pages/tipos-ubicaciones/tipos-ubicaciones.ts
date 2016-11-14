import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TiposUbicacionService } from '../../providers/tipos-ubicacion-service';

import { OrganizacionesPage } from '../organizaciones/organizaciones';
import { ENV } from '../../config/environment';

/*
  Generated class for the TiposUbicaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tipos-ubicaciones',
  templateUrl: 'tipos-ubicaciones.html',
  providers: [TiposUbicacionService]

})
export class TiposUbicacionesPage {

  public datos = null;

  public urlBase : string = ENV.API_URL;

  constructor(public navCtrl: NavController, public params: NavParams, public service: TiposUbicacionService) {
    this.cargarTiposUbicaciones(params.get("url"));
  }


  ionViewDidLoad() {
    //console.log('Hello TiposUbicacionesPage Page');
  }

  cargarTiposUbicaciones(url){
    this.service.load(url).then(data => {
      //console.log(data);
      this.datos = data;
    });
  }

  navegarATipoUbicacion(url){
    this.navCtrl.push(TiposUbicacionesPage, {url: url});
  }

  cargarOrganizacion(url){
    this.navCtrl.push(OrganizacionesPage, {url: url, modo: 'donde-esta'});
  }
}

