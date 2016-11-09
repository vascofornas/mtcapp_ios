import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ENV } from '../config/environment';

/*
  Generated class for the TiposUbicacionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TiposUbicacionService {


  protected data : any;


  constructor(public http: Http) {

  }

  load(url) {

    return new Promise(resolve => {
      this.http.get(ENV.API_URL+url)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

