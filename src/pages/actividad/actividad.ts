import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { ActividadService } from '../../providers/actividad-service';
import Actividad from '../../models/actividad';

import moment from 'moment';

import { ENV } from '../../config/environment';

/*
  Generated class for the Actividad page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
  providers: [ActividadService]
})
export class ActividadPage {

  public actividad = null;

  public urlBase : string = ENV.API_URL;

  constructor(
  	public navCtrl: NavController,
  	public params: NavParams,
  	public service: ActividadService
  ) {
  	this.cargarActividad(params.get('url'))
  }

  cargarActividad(url){
    this.service.load(url).then( (data : Actividad )=> {

      let m = moment(data.fecha_inicio, "YYYY-MM-DD HH:mm:ss");

      data.dia = m.date();
      data.mes = m.format('MMMM');
      data.hora_minutos = m.hour()+':'+m.minutes();

      this.actividad = data;
    });
  }

  ionViewDidLoad() {
    //console.log('Hello ActividadPage Page');
  }

}
