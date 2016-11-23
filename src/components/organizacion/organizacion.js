var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrganizacionesPage } from '../../pages/organizaciones/organizaciones';
import { ENV } from '../../config/environment';
/*
  Generated class for the Organizacion component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
export var OrganizacionComponent = (function () {
    function OrganizacionComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.urlBase = ENV.API_URL;
    }
    OrganizacionComponent.prototype.cargarOrganizacion = function (url) {
        this.navCtrl.push(OrganizacionesPage, { url: url });
    };
    OrganizacionComponent.prototype.openMap = function (latitud, longitud) {
        window.open('href://maps.google.com/maps?z=12&amp;t=m&amp;q=loc:' + latitud.toString() + '+' + longitud.toString());
    };
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], OrganizacionComponent.prototype, "isEven", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], OrganizacionComponent.prototype, "organizacion", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], OrganizacionComponent.prototype, "modo", void 0);
    OrganizacionComponent = __decorate([
        Component({
            selector: 'organizacion',
            templateUrl: 'organizacion.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], OrganizacionComponent);
    return OrganizacionComponent;
}());
//# sourceMappingURL=organizacion.js.map