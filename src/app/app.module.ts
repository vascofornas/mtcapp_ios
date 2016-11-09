import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { QueHacerPage } from '../pages/que-hacer/que-hacer';
import { HomePage } from '../pages/home/home';
import { QueHacerCategoriasPage } from '../pages/que-hacer-categorias/que-hacer-categorias';
import { ActividadesPage } from '../pages/actividades/actividades';
import { QueHacerCalendarioPage } from '../pages/que-hacer-calendario/que-hacer-calendario';
import { TiposUbicacionesPage } from '../pages/tipos-ubicaciones/tipos-ubicaciones';
import { OrganizacionesPage } from '../pages/organizaciones/organizaciones';
import { TiposOrganizacionesPage } from '../pages/tipos-organizaciones/tipos-organizaciones';
import { OrganizacionesPorUbicacionPage } from '../pages/organizaciones-por-ubicacion/organizaciones-por-ubicacion';
import { ConsultanosPage } from '../pages/consultanos/consultanos';

import { IonCalendarModule } from '@ionic2-extra/calendar';

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
    OrganizacionesPorUbicacionPage,
    ConsultanosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonCalendarModule
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
    OrganizacionesPorUbicacionPage,
    TiposOrganizacionesPage,
    ConsultanosPage
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
