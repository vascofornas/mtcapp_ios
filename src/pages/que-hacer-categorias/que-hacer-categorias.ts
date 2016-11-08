import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QueHacerService } from '../../providers/que-hacer-service';

import { ActividadesPage } from '../actividades/actividades';

@Component({
  selector: 'page-que-hacer-categorias',
  templateUrl: 'que-hacer-categorias.html',
  providers: [QueHacerService]
})
export class QueHacerCategoriasPage {

  categorias = null;

  constructor(public navCtrl: NavController, public queHacerService: QueHacerService) {
    this.cargarCategorias();
  }

  cargarCategorias(){
   this.queHacerService.load()
   .then(data => {
   this.categorias = data;
    console.log(this.categorias);
   });
  }

  verActividades(_url){
    this.navCtrl.push(ActividadesPage, {url: _url});
  }

}
