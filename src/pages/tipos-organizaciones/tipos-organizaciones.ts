import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TiposOrganizacionService } from '../../providers/tipos-organizacion-service';

import { OrganizacionesPage } from '../organizaciones/organizaciones';

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

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public tiposOrganizacionService: TiposOrganizacionService
  ) {
    this.cargarTiposOrganizaciones(params.get("url"));
  }

  ionViewDidLoad() {
    //console.log('Hello TiposOrganizacionesPage Page');
  }

  cargarTiposOrganizaciones(url){
    //console.log(url);

    this.tiposOrganizacionService.load(url).then(data => {
      //console.log(data);
      this.tipos_organizaciones = data;
    });
  }

  cargarOrganizaciones(url){
    this.navCtrl.push(OrganizacionesPage, {url: url, modo: 'que-necesito'});
  }

}
