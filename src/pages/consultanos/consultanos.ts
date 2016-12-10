import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native'; */

import { EmailService } from '../../providers/email-service';

@Component({
  selector: 'page-consultanos',
  templateUrl: 'consultanos.html',
  providers: [EmailService]
})
export class ConsultanosPage {

  constructor(public navCtrl: NavController, public emailService: EmailService) {
    this.cargarEmails();
  }

  emails = null;

  ionViewDidLoad() {

  }

  cargarEmails(){
    this.emailService.cargarEmails()
      .then( (data: any) => { this.emails = data; } )
      .catch(e => { console.log(e) })
  }

  writeMail(mail){
    window.open('mailto://'+mail);
  }

  consultaSanitaria(){
    if(this.emails==null) return;
  	this.writeMail(this.emails.consulta_sanitaria);
  }

  consultaJuridica(){
    if(this.emails==null) return;
  	this.writeMail(this.emails.consulta_juridica);
  }

  consultaEducativa(){
    if(this.emails==null) return;
  	this.writeMail(this.emails.consulta_educativa);
  }

  consultaMovilidad(){
    if(this.emails==null) return;
    this.writeMail(this.emails.consulta_movilidad);
  }


}
