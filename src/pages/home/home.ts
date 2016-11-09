import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QueHacerPage } from '../que-hacer/que-hacer';
import { TiposUbicacionesPage } from '../tipos-ubicaciones/tipos-ubicaciones';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  queHacer = () => {
    this.navCtrl.push(QueHacerPage);
  };

  dondeEsta = () => {
    this.navCtrl.push(TiposUbicacionesPage, {url: '/api/donde-esta/categoria/0'});
  };

  queNecesito = () => {
    this.navCtrl.push(QueHacerPage);
  };

  consultanos = () => {
    this.navCtrl.push(QueHacerPage);
  };

  valesDescuento = () => {
    this.navCtrl.push(QueHacerPage);
  };

  zonasWifi = () => {
    this.navCtrl.push(QueHacerPage);
  };

}
