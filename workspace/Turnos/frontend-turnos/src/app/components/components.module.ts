import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { PipesModule } from '../pipes/pipes.module';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { TablaPacientesComponent } from './tabla-pacientes/tabla-pacientes.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    TablaPacientesComponent,
    HistoriaClinicaComponent,
    NuevoPacienteComponent
  ],
  exports: [
    MenuPrincipalComponent,
    TablaPacientesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class ComponentsModule { }
