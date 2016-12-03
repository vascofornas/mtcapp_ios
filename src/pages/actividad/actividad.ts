import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { ActividadService } from '../../providers/actividad-service';
import Actividad from '../../models/actividad';

import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';

import moment from 'moment';

import { ENV } from '../../config/environment';

declare var window : any;

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
      data.anio = m.year();
      data.hora_minutos = m.hour()+':'+m.minutes();

      this.actividad = data;
    });
  }

  ionViewDidLoad() {
    //console.log('Hello ActividadPage Page');
  }

  openUrl(www){
    window.open(www);
  }

  dialPhone(phone){
    window.open('tel://'+phone);
  }

  writeMail(mail){
    window.open('mailto://'+mail);
  }

  openMap(latitud, longitud){
    
    const destination = [latitud,longitud];

    let options: LaunchNavigatorOptions = {
      start: ''
    };

    LaunchNavigator.navigate(destination, options)
        .then(
            success => {},
            error => {}
    );
    ///@-10.7464012,-77.2387528,11z
    //window.open('https://maps.google.com/maps/@'+latitud.toString()+'+'+longitud.toString()+',12z');
  }

}
