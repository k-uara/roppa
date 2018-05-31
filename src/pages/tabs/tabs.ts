import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ClosetPage } from '../closet/closet';
import { PerfilPage } from '../perfil/perfil';
import { CategoriasPage } from '../categorias/categorias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriasPage;
  tab3Root = ClosetPage;
  tab4Root = PerfilPage;

  constructor() {

  }
}
