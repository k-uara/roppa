import { NgModule } from "@angular/core";
import { HomePageModule } from "../home/home.module";
import { CategoriasPageModule } from "../categorias/categorias.module";
import { ClosetPageModule } from "../closet/closet.module";
import { PerfilPageModule } from "../perfil/perfil.module";
import { IonicPageModule } from "ionic-angular";
import { TabsPage } from "./tabs";

@NgModule({
    declarations:[
        TabsPage
    ],

    imports: [
        HomePageModule,
        CategoriasPageModule,
        ClosetPageModule,
        PerfilPageModule,
        IonicPageModule.forChild(TabsPage)
    ],

    exports: [
        HomePageModule,
        CategoriasPageModule,
        ClosetPageModule,
        PerfilPageModule,
    ]
})

export class TabsPageModule {}