import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { QueHacerPage } from '../pages/que-hacer/que-hacer';
import { HomePage } from '../pages/home/home';
import { QueHacerCategoriasPage } from '../pages/que-hacer-categorias/que-hacer-categorias';
import { ActividadesPage } from '../pages/actividades/actividades';
import { QueHacerCalendarioPage } from '../pages/que-hacer-calendario/que-hacer-calendario';

import { ION_CALENDAR_DIRECTIVES, IonCalendar } from '@ionic2-extra/calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QueHacerPage,
    QueHacerCategoriasPage,
    ActividadesPage,
    QueHacerCalendarioPage,
    ION_CALENDAR_DIRECTIVES,
    IonCalendar
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QueHacerPage,
    QueHacerCategoriasPage,
    ActividadesPage,
    QueHacerCalendarioPage
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
