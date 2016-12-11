import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SuscripcionesBaja page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suscripciones-baja',
  templateUrl: 'suscripciones-baja.html'
})
export class SuscripcionesBajaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SuscripcionesBajaPage Page');
  }

}
