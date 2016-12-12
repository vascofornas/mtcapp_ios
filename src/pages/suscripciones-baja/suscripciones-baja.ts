import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { SuscripcionesService } from '../../providers/suscripciones-service';

@Component({
  selector: 'page-suscripciones-baja',
  templateUrl: 'suscripciones-baja.html',
  providers: [SuscripcionesService]
})
export class SuscripcionesBajaPage {

  email : string;
  movil: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public service: SuscripcionesService) {}

  ionViewDidLoad() {

  }

  solicitarBaja(){
  	if(!this.email && !this.movil){
  		this.presentToast('Ingrese un email o SMS válido');
  		return;
  	}
  	if(this.email && !this.validEmail(this.email)){
  	  	this.presentToast('Ingrese un email válido');
  		return;	
  	}
  	this.service.solicitarBaja(this.email, this.movil)
  		.then(()=>{
  			this.presentToast("Datos enviados satisfactoriamente", "success");
        this.email = '';
        this.movil = '';

  		}).catch(e => this.presentToast("Hubo un problema al enviar los datos"))
  }

  validEmail(email){
  	return email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
  }

  presentToast(msg, cssClass="warning") {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      cssClass: cssClass,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });
    toast.present();
  }

}
