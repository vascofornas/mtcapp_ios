import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
import moment from 'moment';

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

  public meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  mesActual = '';
  anioActual;

  public eventSource = [];
  calendar = {
        mode: 'month',
        currentDate: new Date()
  };
  public isToday = true;

  constructor(public navCtrl: NavController) {
    this.mesActual = this.meses[this.calendar.currentDate.getMonth()];
    this.anioActual = this.calendar.currentDate.getFullYear();
  }

  /*
  get seleccionarPeriodo(){
    return this.periodoSeleccionado;
  } */

  avanzarMes(){
    let m = moment(this.calendar.currentDate).add(1, 'months');
    this.calendar.currentDate = m.toDate();
  }

  retrocederMes(){
    let m = moment(this.calendar.currentDate).subtract(1, 'months');
    this.calendar.currentDate = m.toDate();
  }

   onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
  }

      onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
}

  onCurrentDateChanged(event: Date) {
    this.mesActual = this.meses[this.calendar.currentDate.getMonth()];
    this.anioActual = this.calendar.currentDate.getFullYear();
    //today.setHours(0, 0, 0, 0);
    //event.setHours(0, 0, 0, 0);
    //this.isToday = today.getTime() === event.getTime();
  }


  seleccionarPeriodo(value){
    //this.periodoSeleccionado = value;
    console.log(value);
    return;
    /*
    let dateObj = value.startDate;
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let busqueda = year + "-" + month + "-" + day;

    let _url = '/api/que-hacer/agenda/'+busqueda;
    console.log(_url);
    //this.navCtrl.push(ActividadesPage, {url: _url});
    */
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
