import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { routing } from "./routes";
import { HomeComponent } from "./components/home/home.component";
import {FooterComponent} from "./components/layout/footer.component";
import {NavigationComponent} from "./components/layout/navigation.component";
import {TopNavBarComponent} from "./components/layout/topnavbar.component";
import {PanelControlComponent} from "./components/panel-control/panel-control.component";
import {PanelControlComponentJefe} from "./components/panel-control/panel-control-jefe.component";
import {PanelCientificoComponent} from "./components/panel-control/panel-cientifico.component";
import {PanelAsistenteComponent} from "./components/panel-control/panel-asistente.component";
import {FormsModule} from "@angular/forms";
import {UIModule} from "./components/ui/ui.module";
import {LabModule} from "./components/lab/lab.module";

@NgModule({
    imports: [
        LabModule,
        UIModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        AppComponent,
        FooterComponent,
        NavigationComponent,
        TopNavBarComponent,
        PanelControlComponent,
        PanelControlComponentJefe,
        PanelCientificoComponent,
        PanelAsistenteComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }







