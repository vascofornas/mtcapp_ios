import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

import { QueHacerPage } from '../que-hacer/que-hacer';
import { TiposUbicacionesPage } from '../tipos-ubicaciones/tipos-ubicaciones';
import { TiposOrganizacionesPage } from '../tipos-organizaciones/tipos-organizaciones';
import { ConsultanosPage } from '../consultanos/consultanos';

declare var window: any;
declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform) {

    platform.ready().then(() => {
      if (typeof cordova !== 'undefined' && cordova.InAppBrowser) {
        window.open = cordova.InAppBrowser.open;
      } else {

      }
    });
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
    window.open("http://www.google.com");
  };

  zonasWifi = () => {
    window.open("http://www.yahoo.com");
  };

}
