import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SuscripcionesService } from '../../providers/suscripciones-service';

@Component({
  selector: 'page-suscripciones-alta',
  templateUrl: 'suscripciones-alta.html',
  providers: [SuscripcionesService]
})
export class SuscripcionesAltaPage {

  email : string;
  movil: string;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  solicitarAlta(){
  	
  }

}
