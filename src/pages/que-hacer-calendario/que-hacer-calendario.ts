import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActividadesPage } from '../actividades/actividades';

/*
  Generated class for the QueHacerCalendario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-que-hacer-calendario',
  templateUrl: 'que-hacer-calendario.html'
})
export class QueHacerCalendarioPage {

  public periodoSeleccionado;

  constructor(public navCtrl: NavController) {}

  get seleccionarPeriodo(){
    return this.periodoSeleccionado;
  }

  set seleccionarPeriodo(value){
    this.periodoSeleccionado = value;
    console.log(value);
    let dateObj = value.startDate;
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let busqueda = year + "-" + month + "-" + day;

    let _url = '/api/que-hacer/agenda/'+busqueda;

    this.navCtrl.push(ActividadesPage, {url: _url});
    
  }

  ionViewDidLoad() {
    //console.log('Hello QueHacerCalendarioPage Page');
  }

  /*
  onChange(evt){
    let dateObj = evt.startDate;
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let busqueda = year + "-" + month + "-" + day;

    let _url = '/api/que-hacer/agenda/'+busqueda;

    this.navCtrl.push(ActividadesPage, {url: _url});
  }*/


}
