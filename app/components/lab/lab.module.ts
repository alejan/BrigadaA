import { NgModule } from "@angular/core";
import { ProyectoService } from "./proyecto/proyecto.service";
import { ProtocoloService } from "./protocolo/protocolo.service";
import { MuestraService } from "./muestra/muestra.service";
import { ExperimentoService } from "./experimento/experimento.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProyectoComponent } from "./proyecto/proyecto.component";
import { ProyectoDetalleComponent } from "./proyecto/proyecto.detalle.component";
import { ProyectoListComponent } from "./proyecto/proyecto.list.component";
import { RouterModule } from "@angular/router";
import { ProtocoloComponent } from "./protocolo/protocolo.component";
import { ProtocoloBuscadorComponent } from "./protocolo/protocolo.buscador.component";
import { ProtocoloDetalleComponent } from "./protocolo/protocolo.detalle.component";
import { NotificacionesComponent } from "./notificaciones/notificaciones.component"
import { NotificacionesService } from "./notificaciones/notificaciones.service";
import { KeysPipe } from "./keys.pipe";
import { EquiposComponent } from "./equipos/equipos.component";
import { EquiposService } from "./equipos/equipos.service";
import {routing} from "../../routes";
import {JsonpModule, HttpModule} from "@angular/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        ProyectoComponent,
        ProtocoloComponent,
        ProtocoloBuscadorComponent,
        ProtocoloDetalleComponent,
        ProyectoListComponent,
        ProyectoDetalleComponent,
        NotificacionesComponent,
        KeysPipe,
        EquiposComponent,
    ],
    exports:[
        NotificacionesComponent,
        ProtocoloBuscadorComponent,
        ProtocoloDetalleComponent,
        ProyectoListComponent,
        ProyectoDetalleComponent,
        EquiposComponent
    ],
    providers: [
        ProyectoService,
        ProtocoloService,
        MuestraService,
        ExperimentoService,
        NotificacionesService,
        EquiposService
    ]


})
export class LabModule {

}