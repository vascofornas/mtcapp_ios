import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QueHacerPage } from '../../pages/que-hacer/que-hacer';

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
    this.navCtrl.push(QueHacerPage);
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
