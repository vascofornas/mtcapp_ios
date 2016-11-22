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
import { NgCalendarModule  } from 'ionic2-calendar';
import { OrganizacionComponent } from '../components/organizacion/organizacion';
import { ActividadComponent } from '../components/actividad/actividad';

@NgModule({
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
