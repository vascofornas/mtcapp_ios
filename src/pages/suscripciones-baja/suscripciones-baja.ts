import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SuscripcionesService } from '../../providers/suscripciones-service';

@Component({
  selector: 'page-suscripciones-baja',
  templateUrl: 'suscripciones-baja.html',
  providers: [SuscripcionesService]
})
export class SuscripcionesBajaPage {

  email : string;
  movil: string;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  solicitarBaja(){

  }

}
