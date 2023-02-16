import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ReservarTurnoComponent } from './pages/reservar-turno/reservar-turno.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { VerPromocionComponent } from './pages/ver-promocion/ver-promocion.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TiendaComponent
      },
      {
        path: 'promociones',
        component: PromocionesComponent
      },
      {
        path: 'promociones/:id',
        component: VerPromocionComponent
      },
      {
        path: 'mi-cuenta',
        component: MiCuentaComponent
      },
      {
        path: 'turnos',
        component: ReservarTurnoComponent
      },      
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TiendaRoutingModule { }
