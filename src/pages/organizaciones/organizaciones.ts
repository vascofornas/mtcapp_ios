import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';

import { OrganizacionService } from '../../providers/organizacion-service';

import { ENV } from '../../config/environment';

/*
  Generated class for the Organizaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organizaciones',
  templateUrl: 'organizaciones.html',
  providers: [OrganizacionService]
})
export class OrganizacionesPage {

  public organizaciones = null;

  public urlBase : string = ENV.API_URL;

  public modo : string = 'normal';

  constructor(public navCtrl: NavController, public params: NavParams, public service: OrganizacionService) {
    this.cargarOrganizaciones(params.get("url"));
    this.modo = params.get('modo');
    if(!this.modo) this.modo = 'donde-esta';
  }

  ionViewDidLoad() {

  }

  cargarOrganizaciones(url){
    this.service.load(url).then(data => {
      //console.log(data);
      this.organizaciones = data;
    });
  }

}
