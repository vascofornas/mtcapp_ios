import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { ActividadesService } from '../../providers/actividades-service';

import { ENV } from '../../config/environment';

/*
  Generated class for the Actividades page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html',
  providers: [ActividadesService]
})
export class ActividadesPage {

  public actividades : any = null;

  public urlBase : string = ENV.API_URL;

  constructor(public navCtrl: NavController, public params: NavParams, public service: ActividadesService) {

    this.cargarActividades(params.get("url"));
  }

  ionViewDidLoad() {
    //console.log('Hello ActividadesPage Page');
  }

  cargarActividades(url: string){
    this.service.load(url).then(data => {
      this.actividades = data;
      //console.log(this.actividades);
    });
  }

}
