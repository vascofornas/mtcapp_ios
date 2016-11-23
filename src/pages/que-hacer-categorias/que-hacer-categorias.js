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
import { QueHacerService } from '../../providers/que-hacer-service';
import { ActividadesPage } from '../actividades/actividades';
export var QueHacerCategoriasPage = (function () {
    function QueHacerCategoriasPage(navCtrl, queHacerService) {
        this.navCtrl = navCtrl;
        this.queHacerService = queHacerService;
        this.categorias = null;
        this.cargarCategorias();
    }
    QueHacerCategoriasPage.prototype.cargarCategorias = function () {
        var _this = this;
        this.queHacerService.load()
            .then(function (data) {
            _this.categorias = data;
            //console.log(this.categorias);
        });
    };
    QueHacerCategoriasPage.prototype.verActividades = function (_url) {
        this.navCtrl.push(ActividadesPage, { url: _url });
    };
    QueHacerCategoriasPage = __decorate([
        Component({
            selector: 'page-que-hacer-categorias',
            templateUrl: 'que-hacer-categorias.html',
            providers: [QueHacerService]
        }), 
        __metadata('design:paramtypes', [NavController, QueHacerService])
    ], QueHacerCategoriasPage);
    return QueHacerCategoriasPage;
}());
//# sourceMappingURL=que-hacer-categorias.js.map