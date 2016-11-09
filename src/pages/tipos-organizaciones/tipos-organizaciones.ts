import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TiposOrganizacionService } from '../../providers/tipos-organizacion-service';

import { ENV } from '../../config/environment';

/*
  Generated class for the TiposOrganizaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tipos-organizaciones',
  templateUrl: 'tipos-organizaciones.html',
  providers: [TiposOrganizacionService]
})
export class TiposOrganizacionesPage {

  public tipos_organizaciones = null;

  public urlBase : string = ENV.API_URL;

  constructor(public navCtrl: NavController, public params: NavParams, public service: TiposOrganizacionService) {
    this.cargarTiposOrganizaciones(params.get("url"));
  }

  ionViewDidLoad() {
    //console.log('Hello TiposOrganizacionesPage Page');
  }

  cargarTiposOrganizaciones(url){

  }

}
