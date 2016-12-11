import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SuscripcionesAlta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suscripciones-alta',
  templateUrl: 'suscripciones-alta.html'
})
export class SuscripcionesAltaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SuscripcionesAltaPage Page');
  }

}
