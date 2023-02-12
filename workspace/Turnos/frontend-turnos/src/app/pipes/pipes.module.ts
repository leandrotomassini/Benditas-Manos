import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarPacientesPipe } from './buscar-paciente.pipe';



@NgModule({
  declarations: [
    BuscarPacientesPipe
  ],
  exports: [
    BuscarPacientesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
