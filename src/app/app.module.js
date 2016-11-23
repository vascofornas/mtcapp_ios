var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QueHacerPage } from '../pages/que-hacer/que-hacer';
import { HomePage } from '../pages/home/home';
import { QueHacerCategoriasPage } from '../pages/que-hacer-categorias/que-hacer-categorias';
import { ActividadesPage } from '../pages/actividades/actividades';
import { QueHacerCalendarioPage } from '../pages/que-hacer-calendario/que-hacer-calendario';
import { TiposUbicacionesPage } from '../pages/tipos-ubicaciones/tipos-ubicaciones';
import { OrganizacionesPage } from '../pages/organizaciones/organizaciones';
import { TiposOrganizacionesPage } from '../pages/tipos-organizaciones/tipos-organizaciones';
import { ConsultanosPage } from '../pages/consultanos/consultanos';
import { NgCalendarModule } from 'ionic2-calendar';
import { OrganizacionComponent } from '../components/organizacion/organizacion';
import { ActividadComponent } from '../components/actividad/actividad';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                QueHacerPage,
                QueHacerCategoriasPage,
                ActividadesPage,
                QueHacerCalendarioPage,
                TiposUbicacionesPage,
                OrganizacionesPage,
                TiposOrganizacionesPage,
                ConsultanosPage,
                OrganizacionComponent,
                ActividadComponent
            ],
            imports: [
                IonicModule.forRoot(MyApp, {
                    backButtonText: '',
                    iconMode: 'ios'
                }),
                NgCalendarModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                QueHacerPage,
                QueHacerCategoriasPage,
                ActividadesPage,
                QueHacerCalendarioPage,
                TiposUbicacionesPage,
                OrganizacionesPage,
                TiposOrganizacionesPage,
                ConsultanosPage,
                OrganizacionComponent,
                ActividadComponent
            ],
            providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map