import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SuscripcionesAltaPage } from '../suscripciones-alta/suscripciones-alta';
import { SuscripcionesBajaPage } from '../suscripciones-baja/suscripciones-baja';

/*
  Generated class for the Inscripciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inscripciones',
  templateUrl: 'inscripciones.html'
})
export class InscripcionesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    //console.log('Hello InscripcionesPage Page');
  }

  alta(){
  	this.navCtrl.push(SuscripcionesAltaPage);
  }

  baja(){
  	this.navCtrl.push(SuscripcionesBajaPage);
  }

}
