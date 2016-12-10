import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Vale } from '../../models/vale';

import { ValeService } from '../../providers/vale-service';

import { ENV } from '../../config/environment';

@Component({
  selector: 'page-vale',
  templateUrl: 'vale.html',
  providers: [ValeService]
})
export class ValePage {

	vales : Array<Vale> = [];

	baseUrl : string = ENV.API_URL;

  constructor(public navCtrl: NavController, public service: ValeService) {
  	this.cargarVales();
  }

  ionViewDidLoad() {

  }

  cargarVales(){
  	this.service.cargarVales().then(v => {
  		this.vales = v;
  	}).catch(e => console.log(e));
  }

  openUrl(www){
    window.open(www);
  }

  dialPhone(phone){
    window.open('tel://'+phone.replace(/ /g,''));
  }

  writeMail(mail){
    window.open('mailto://'+mail);
  }


}
