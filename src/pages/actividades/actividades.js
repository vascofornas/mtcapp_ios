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
import { NavController, NavParams } from 'ionic-angular';
import { ActividadesService } from '../../providers/actividades-service';
import moment from 'moment';
import { ENV } from '../../config/environment';
/*
  Generated class for the Actividades page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ActividadesPage = (function () {
    function ActividadesPage(navCtrl, params, service) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.service = service;
        this.actividades = null;
        this.urlBase = ENV.API_URL;
        this.cargarActividades(params.get("url"));
    }
    ActividadesPage.prototype.ionViewDidLoad = function () {
        //console.log('Hello ActividadesPage Page');
    };
    ActividadesPage.prototype.cargarActividades = function (url) {
        var _this = this;
        this.service.load(url).then(function (data) {
            _this.procesarActividades(data);
            //this.actividades = data;
            //console.log(this.actividades);
        });
    };
    ActividadesPage.prototype.procesarActividades = function (data) {
        var acts = [], m, act;
        for (var i = 0; i < data.length; i++) {
            act = data[i];
            m = moment(act.fecha_inicio, "YYYY-MM-DD HH:mm:ss");
            act.dia = m.date();
            act.mes = m.format('MMMM');
            act.hora_minutos = m.hour() + ':' + m.minutes();
            acts.push(act);
        }
        this.actividades = acts;
    };
    ActividadesPage = __decorate([
        Component({
            selector: 'page-actividades',
            templateUrl: 'actividades.html',
            providers: [ActividadesService]
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, ActividadesService])
    ], ActividadesPage);
    return ActividadesPage;
}());
//# sourceMappingURL=actividades.js.map