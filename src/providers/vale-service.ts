import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { ENV } from '../config/environment';

import { Vale } from '../models/vale';

@Injectable()
export class ValeService {

  vales: any;
  path: string;

  constructor(public http: Http) {
  	this.path = ENV.API_URL+'/api/vales';
  }

  cargarVales() : Promise<Array<Vale>>{

    if (this.vales) {
      // already loaded data
      return Promise.resolve(this.vales);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(this.path)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.vales = data.vales;
          resolve(this.vales);
        });
    });

  }

}
