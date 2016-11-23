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
import { TiposOrganizacionService } from '../../providers/tipos-organizacion-service';
import { OrganizacionesPage } from '../organizaciones/organizaciones';
/*
  Generated class for the TiposOrganizaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var TiposOrganizacionesPage = (function () {
    function TiposOrganizacionesPage(navCtrl, params, tiposOrganizacionService) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.tiposOrganizacionService = tiposOrganizacionService;
        this.tipos_organizaciones = null;
        this.cargarTiposOrganizaciones(params.get("url"));
    }
    TiposOrganizacionesPage.prototype.ionViewDidLoad = function () {
        //console.log('Hello TiposOrganizacionesPage Page');
    };
    TiposOrganizacionesPage.prototype.cargarTiposOrganizaciones = function (url) {
        //console.log(url);
        var _this = this;
        this.tiposOrganizacionService.load(url).then(function (data) {
            //console.log(data);
            _this.tipos_organizaciones = data;
        });
    };
    TiposOrganizacionesPage.prototype.cargarOrganizaciones = function (url) {
        this.navCtrl.push(OrganizacionesPage, { url: url, modo: 'que-necesito' });
    };
    TiposOrganizacionesPage = __decorate([
        Component({
            selector: 'page-tipos-organizaciones',
            templateUrl: 'tipos-organizaciones.html',
            providers: [TiposOrganizacionService]
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, TiposOrganizacionService])
    ], TiposOrganizacionesPage);
    return TiposOrganizacionesPage;
}());
//# sourceMappingURL=tipos-organizaciones.js.map