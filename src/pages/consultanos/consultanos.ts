import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Consultanos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-consultanos',
  templateUrl: 'consultanos.html'
})
export class ConsultanosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ConsultanosPage Page');
  }

}
