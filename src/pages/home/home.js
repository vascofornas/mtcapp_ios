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
import { NavController, Platform } from 'ionic-angular';
import { QueHacerPage } from '../que-hacer/que-hacer';
import { TiposUbicacionesPage } from '../tipos-ubicaciones/tipos-ubicaciones';
import { TiposOrganizacionesPage } from '../tipos-organizaciones/tipos-organizaciones';
import { ConsultanosPage } from '../consultanos/consultanos';
export var HomePage = (function () {
    function HomePage(navCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.queHacer = function () {
            _this.navCtrl.push(QueHacerPage);
        };
        this.dondeEsta = function () {
            _this.navCtrl.push(TiposUbicacionesPage, { url: '/api/donde-esta/categoria/0' });
        };
        this.queNecesito = function () {
            _this.navCtrl.push(TiposOrganizacionesPage, { url: '/api/que-necesito/index' });
        };
        this.consultanos = function () {
            _this.navCtrl.push(ConsultanosPage);
        };
        this.valesDescuento = function () {
            window.open("http://www.google.com");
        };
        this.zonasWifi = function () {
            window.open("http://www.yahoo.com");
        };
        platform.ready().then(function () {
            if (typeof cordova !== 'undefined' && cordova.InAppBrowser) {
                window.open = cordova.InAppBrowser.open;
            }
            else {
            }
        });
    }
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [NavController, Platform])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map