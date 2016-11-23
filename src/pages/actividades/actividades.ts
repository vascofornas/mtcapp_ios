import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { ActividadesService } from '../../providers/actividades-service';

import { ActividadPage } from '../actividad/actividad';

import moment from 'moment';
import { ENV } from '../../config/environment';

import Actividad from '../../models/actividad';

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

  public actividades : Actividad[] = null;

  public urlBase : string = ENV.API_URL;

  constructor(public navCtrl: NavController, public params: NavParams, public service: ActividadesService) {

    this.cargarActividades(params.get("url"));
  }

  ionViewDidLoad() {
    //console.log('Hello ActividadesPage Page');
  }

  cargarActividades(url: string){
    this.service.load(url).then( (data : Actividad[] )=> {

      this.procesarActividades(data);
      //this.actividades = data;
      //console.log(this.actividades);
    });
  }

  procesarActividades(data : Actividad[]){

    let acts : Actividad[] = [], m, act;
    for(let i=0;i<data.length;i++){
      act = data[i];
      m = moment(act.fecha_inicio, "YYYY-MM-DD HH:mm:ss");

      act.dia = m.date();
      act.mes = m.format('MMMM');
      act.hora_minutos = m.hour()+':'+m.minutes();
      acts.push(act);
    }
    this.actividades = acts;
  }

  cargarDetalleActividad(id){
    this.navCtrl.push(ActividadPage, {url: ENV.API_URL+'/api/que-hacer/detalle/'+id});
  }

}
