import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';

import { TiendaComponent } from './pages/tienda/tienda.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { VerPromocionComponent } from './pages/ver-promocion/ver-promocion.component';
import { ReservarTurnoComponent } from './pages/reservar-turno/reservar-turno.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';





@NgModule({
  declarations: [
    TiendaComponent,
    PromocionesComponent,
    VerPromocionComponent,
    ReservarTurnoComponent,
    MiCuentaComponent,
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
