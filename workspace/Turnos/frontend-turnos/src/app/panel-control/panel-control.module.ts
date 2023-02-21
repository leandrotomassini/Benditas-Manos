import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelControlRoutingModule } from './panel-control-routing.module';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PromocionesComponent,
    
  ],
  imports: [
    CommonModule,
    PanelControlRoutingModule,
    MaterialModule
  ]
})
export class PanelControlModule { }
