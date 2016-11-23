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
import { OrganizacionService } from '../../providers/organizacion-service';
import { ENV } from '../../config/environment';
/*
  Generated class for the Organizaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var OrganizacionesPage = (function () {
    function OrganizacionesPage(navCtrl, params, service) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.service = service;
        this.organizaciones = null;
        this.urlBase = ENV.API_URL;
        this.modo = 'normal';
        this.cargarOrganizaciones(params.get("url"));
        this.modo = params.get('modo');
        if (!this.modo)
            this.modo = 'donde-esta';
    }
    OrganizacionesPage.prototype.ionViewDidLoad = function () {
    };
    OrganizacionesPage.prototype.openUrl = function (url) {
        window.open(url);
    };
    OrganizacionesPage.prototype.cargarOrganizaciones = function (url) {
        var _this = this;
        this.service.load(url).then(function (data) {
            //console.log(data);
            _this.organizaciones = data;
        });
    };
    OrganizacionesPage = __decorate([
        Component({
            selector: 'page-organizaciones',
            templateUrl: 'organizaciones.html',
            providers: [OrganizacionService]
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, OrganizacionService])
    ], OrganizacionesPage);
    return OrganizacionesPage;
}());
//# sourceMappingURL=organizaciones.js.map