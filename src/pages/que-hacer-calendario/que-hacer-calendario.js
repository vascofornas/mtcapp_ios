var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
import moment from 'moment';
/*
  Generated class for the QueHacerCalendario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var QueHacerCalendarioPage = (function () {
    function QueHacerCalendarioPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.loading = false;
        this.meses = [
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
        this.mesActual = '';
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.isToday = true;
        var mes = this.mesActual = this.meses[];
        this.anioActual = this.calendar.currentDate.getFullYear();
        this.cargarEventos(this.mesActual, this.anioActual);
    }
    /*
    get seleccionarPeriodo(){
      return this.periodoSeleccionado;
    } */
    QueHacerCalendarioPage.prototype.cargarEventos = function (mes, anio) {
        this.loading = true;
    };
    QueHacerCalendarioPage.prototype.avanzarMes = function () {
        var m = moment(this.calendar.currentDate).add(1, 'months');
        this.calendar.currentDate = m.toDate();
    };
    QueHacerCalendarioPage.prototype.retrocederMes = function () {
        var m = moment(this.calendar.currentDate).subtract(1, 'months');
        this.calendar.currentDate = m.toDate();
    };
    QueHacerCalendarioPage.prototype.onTimeSelected = function (ev) {
        var busqueda = ev.selectedTime.getUTCFullYear() + "-" +
            (ev.selectedTime.getUTCMonth() + 1) + "-" +
            ev.selectedTime.getUTCDate();
        var _url = '/api/que-hacer/agenda/' + busqueda;
        this.navCtrl.push(ActividadesPage, { url: _url });
        //console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
    };
    QueHacerCalendarioPage.prototype.onEventSelected = function (event) {
        //console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    QueHacerCalendarioPage.prototype.onCurrentDateChanged = function (event) {
        this.mesActual = this.meses[this.calendar.currentDate.getMonth()];
        this.anioActual = this.calendar.currentDate.getFullYear();
    };
    QueHacerCalendarioPage.prototype.ionViewDidLoad = function () {
        //console.log('Hello QueHacerCalendarioPage Page');
    };
    QueHacerCalendarioPage = __decorate([
        Component({
            selector: 'page-que-hacer-calendario',
            templateUrl: 'que-hacer-calendario.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], QueHacerCalendarioPage);
    return QueHacerCalendarioPage;
}());
//# sourceMappingURL=que-hacer-calendario.js.map