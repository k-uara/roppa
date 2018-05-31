import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage {

  constructor(public navCtrl: NavController) {

  }

  setPage(){
    this.navCtrl.push('AnunciosPage');
  }

}
