import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Paciente } from 'src/app/interfaces/pacientes';

import { AuthService } from 'src/app/services/auth.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.scss'],
})
export class NuevoPacienteComponent implements OnInit {

  nuevoPaciente: Paciente = {
    nombre: '',
    estado: false,
    direccion: '',
    fechaNacimiento: '',
    dni: '',
    obraSocial: '',
    sexo: '',
    usuario: ''
  };

  pacienteFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    sexo: [],
    fechaNacimiento: [],
    telefono: [],
    direccion: [],
    dni: [, [Validators.required, Validators.min(3)]],
    obraSocial: [],
    estado: [true, [Validators.required, Validators.min(3)]],
    usuario: [this.authService.usuario.uid]
  });

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private authService: AuthService,
    private pacienteService: PacientesService
  ) { }

  ngOnInit() { }

  volverAtras() {
    this.modalCtrl.dismiss();
  }

  campoEsValido(campo: string) {
    return this.pacienteFormulario.controls[campo].errors
      && this.pacienteFormulario.controls[campo].touched;
  }

  guardarPaciente() {
    this.nuevoPaciente = this.pacienteFormulario.value;
    this.pacienteService.nuevoPaciente(this.nuevoPaciente).subscribe(resp => {
      this.modalCtrl.dismiss();
    });
  }

}
