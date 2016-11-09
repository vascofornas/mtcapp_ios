import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ENV } from '../config/environment';


/*
  Generated class for the TiposOrganizacionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TiposOrganizacionService {

  constructor(public http: Http) {

  }

  load(url){

    return new Promise(resolve => {

      var path = ENV.API_URL+url;
      console.log(path);

      this.http.get(path)
        .map(res => res.json())
        .subscribe( (data : any) => {

          resolve(data.tipos_organizacion);
        });
    });
  }

}
