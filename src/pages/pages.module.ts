import { NgModule } from "@angular/core";
import { AnunciosPageModule } from "./anuncios/anuncios.module";
import { TabsPageModule } from "./tabs/tabs.module";
@NgModule({
    imports: [
        TabsPageModule,
        AnunciosPageModule
    ],
    exports: [
        TabsPageModule,
        AnunciosPageModule
    ]
})
export class PagesModule {}