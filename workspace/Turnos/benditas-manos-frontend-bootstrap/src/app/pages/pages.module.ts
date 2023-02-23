import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from './components/components.module';

import { PromocionesComponent } from './promociones/promociones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    PromocionesComponent,
    UsuariosComponent,
    DashboardComponent
  ],
  exports: [
    PromocionesComponent,
    UsuariosComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }
