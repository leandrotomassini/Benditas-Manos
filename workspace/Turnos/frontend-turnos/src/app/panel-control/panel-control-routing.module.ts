import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'promociones',
        component: PromocionesComponent
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
export class PanelControlRoutingModule { }
