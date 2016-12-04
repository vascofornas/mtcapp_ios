import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';

import { ENLACES } from '../../config/enlaces';

@Component({
  selector: 'page-consultanos',
  templateUrl: 'consultanos.html'
})
export class ConsultanosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  writeMail(mail){
    window.open('mailto://'+mail);
  }

  consultaSanitaria(){
  	this.writeMail(ENLACES.CONSULTA_SANITARIA);
  }

  consultaJuridica(){
  	this.writeMail(ENLACES.CONSULTA_JURIDICA);
  }

  consultaEducativa(){
  	this.writeMail(ENLACES.CONSULTA_EDUCATIVA);
  }


}
