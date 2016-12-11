import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QueHacerCategoriasPage } from '../que-hacer-categorias/que-hacer-categorias';
import { QueHacerCalendarioPage } from '../que-hacer-calendario/que-hacer-calendario';
import { InscripcionesPage } from '../inscripciones/inscripciones';

@Component({
  selector: 'page-quehacer',
  templateUrl: 'que-hacer.html'
})
export class QueHacerPage {

  categorias = null;

  constructor(public navCtrl: NavController) {
    //this.cargarCategorias();
  }

  mostrarCalendario(){
    this.navCtrl.push(QueHacerCalendarioPage);
  }

  mostrarCategorias(){
    this.navCtrl.push(QueHacerCategoriasPage);
  }

  mostrarInscripciones(){
    this.navCtrl.push(InscripcionesPage);
  }
}
