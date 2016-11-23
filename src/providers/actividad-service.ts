import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ActividadService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActividadService {

  constructor(public http: Http) {
    //console.log('Hello ActividadService Provider');
  }

  load(url){
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe( (data) => {
          resolve(data);
        });
    });  	
  }

}
