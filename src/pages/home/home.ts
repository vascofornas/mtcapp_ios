import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QueHacerPage } from '../que-hacer/que-hacer';
import { TiposUbicacionesPage } from '../tipos-ubicaciones/tipos-ubicaciones';
import { TiposOrganizacionesPage } from '../tipos-organizaciones/tipos-organizaciones';
import { ConsultanosPage } from '../consultanos/consultanos';

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
    this.navCtrl.push(TiposOrganizacionesPage, {url: '/api/que-necesito/index'});
  };

  consultanos = () => {
    this.navCtrl.push(ConsultanosPage);
  };

  valesDescuento = () => {

  };

  zonasWifi = () => {

  };

}
