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
import { TiposUbicacionService } from '../../providers/tipos-ubicacion-service';
import { OrganizacionesPage } from '../organizaciones/organizaciones';
import { ENV } from '../../config/environment';
/*
  Generated class for the TiposUbicaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var TiposUbicacionesPage = (function () {
    function TiposUbicacionesPage(navCtrl, params, service) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.service = service;
        this.datos = null;
        this.urlBase = ENV.API_URL;
        this.cargarTiposUbicaciones(params.get("url"));
    }
    TiposUbicacionesPage.prototype.ionViewDidLoad = function () {
        //console.log('Hello TiposUbicacionesPage Page');
    };
    TiposUbicacionesPage.prototype.cargarTiposUbicaciones = function (url) {
        var _this = this;
        this.service.load(url).then(function (data) {
            //console.log(data);
            _this.datos = data;
        });
    };
    TiposUbicacionesPage.prototype.navegarATipoUbicacion = function (url) {
        this.navCtrl.push(TiposUbicacionesPage, { url: url });
    };
    TiposUbicacionesPage.prototype.cargarOrganizacion = function (url) {
        this.navCtrl.push(OrganizacionesPage, { url: url, modo: 'donde-esta' });
    };
    TiposUbicacionesPage = __decorate([
        Component({
            selector: 'page-tipos-ubicaciones',
            templateUrl: 'tipos-ubicaciones.html',
            providers: [TiposUbicacionService]
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, TiposUbicacionService])
    ], TiposUbicacionesPage);
    return TiposUbicacionesPage;
}());
//# sourceMappingURL=tipos-ubicaciones.js.map