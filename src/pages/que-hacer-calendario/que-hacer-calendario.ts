import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
import moment from 'moment';
import { ENV } from '../../config/environment';

import Actividad from '../../models/actividad';

import { CalendarioProvider } from '../../providers/calendario-provider';

/*
  Generated class for the QueHacerCalendario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-que-hacer-calendario',
  templateUrl: 'que-hacer-calendario.html',
  providers: [CalendarioProvider]
})
export class QueHacerCalendarioPage {

  public loading = false;

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

  mesNumero = 0;
  mesActual = '';
  anioActual = 0;

  public eventSource = [
    /* {
      title: "Huh",
      startTime: new Date(Date.UTC(2016, 10, 10)),
      endTime: new Date(Date.UTC(2016, 10,11)),
      allDay: true
    } */
  ];
  calendar = {
        mode: 'month',
        currentDate: new Date()
  };
  public isToday = true;

  constructor(public navCtrl: NavController, public eventoService: CalendarioProvider) {
    this.cambiarMes();
  }

  cambiarMes(){
    let mesNumero = this.calendar.currentDate.getMonth();
    this.mesActual = this.meses[mesNumero];
    let anioActual = this.calendar.currentDate.getFullYear();

    if(mesNumero != this.mesNumero || anioActual != this.anioActual){
      this.cargarMes(mesNumero, anioActual);
    }
    this.mesNumero = mesNumero;
    this.anioActual = anioActual;
  }

  cargarMes(mes, anio){
    this.loading = true;

    let url = ENV.API_URL+'/api/que-hacer/mes/'+(mes+1)+'/'+anio;

    this.eventoService.load(url).then( (data : Actividad[] )=> {
      this.procesarEventos(data);
      this.loading = false;
    });

  }

  procesarEventos(data){
    let eventos = [], endTime;
    for(let i=0; i<data.length; i++){

      endTime = data[i].fecha_fin ? moment(data[i].fecha_fin) : moment(data[i].fecha_inicio);

      eventos.push({
        title: data[i].titulo,
        startTime: moment(data[i].fecha_inicio).toDate(),
        endTime: endTime.toDate(),
        allDay: false
      });
    }
    this.eventSource = eventos;
  }

  avanzarMes(){
    let m = moment(this.calendar.currentDate).add(1, 'months');
    this.calendar.currentDate = m.toDate();
  }

  retrocederMes(){
    let m = moment(this.calendar.currentDate).subtract(1, 'months');
    this.calendar.currentDate = m.toDate();
  }

  onTimeSelected(ev) {
    let busqueda = ev.selectedTime.getUTCFullYear() + "-" +
      (ev.selectedTime.getUTCMonth()+1) + "-" +
      ev.selectedTime.getUTCDate();
    let _url = '/api/que-hacer/agenda/'+busqueda;
    this.navCtrl.push(ActividadesPage, {url: _url});

    //console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
  }

  onEventSelected(event) {
    //console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onCurrentDateChanged(event: Date) {

    this.cambiarMes();

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
