import { Route, RouterModule } from '@angular/router';


import {PanelControlComponent} from "./components/panel-control/panel-control.component";
import {ProtocoloComponent} from "./components/lab/protocolo/protocolo.component";
import {ProyectoComponent} from "./components/lab/proyecto/proyecto.component";

export const routes: Route[] = [
            {path: 'panel-control', component: PanelControlComponent },
            {path: '', redirectTo: 'panel-control', pathMatch:'full'},
            {path: '**', redirectTo: 'panel-control', pathMatch:'full'},
             { path: 'proyectos', component: ProyectoComponent },
            { path: 'protocolos', component: ProtocoloComponent }


];

export const routing = RouterModule.forRoot(routes, { useHash: true });
