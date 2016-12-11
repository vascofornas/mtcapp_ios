import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ENV } from '../config/environment';

@Injectable()
export class SuscripcionesService {

  constructor(public http: Http) {
    console.log('Hello SuscripcionesService Provider');
  }

  solicitarAlta(email, movil) : Promise<boolean>{
  	return new Promise(resolve => {

      var path = ENV.API_URL+'/api/suscripciones/alta';
      //console.log(path);

      this.http.post(path, JSON.stringify({email,movil}))
        .map(res => res.json())
        .subscribe( (data : any) => {
          resolve(true);
        });
    });
  }

  solicitarBaja(email, movil) : Promise<boolean>{
  	return new Promise(resolve => {

      var path = ENV.API_URL+'/api/suscripciones/baja';
      //console.log(path);

      this.http.post(path, JSON.stringify({email,movil}))
        .map(res => res.json())
        .subscribe( (data : any) => {
          resolve(true);
        });
    });
  }

}
