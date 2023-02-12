import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Historia, HistoriasResponse } from 'src/app/interfaces/historias';

import { Paciente } from 'src/app/interfaces/pacientes';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriasclinicasService } from 'src/app/services/historiasclinicas.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.scss'],
})
export class HistoriaClinicaComponent implements OnInit {

  @Input() pacienteId: string = '';

  historiaClinica: Historia[] = [];

  paciente: Paciente = {
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
    estado: [, [Validators.required, Validators.min(3)]]
  });

  historiaFormulario: FormGroup = this.fb.group({
    historia: [, [Validators.required, Validators.minLength(3)]]
  });

  nuevaHistoria: Historia = {
    usuario: this.authService.usuario.uid || '',
    paciente: this.pacienteId,
    historia: this.historiaFormulario.controls['historia'].value,
    fecha: new Date().toLocaleDateString(),
    estado: true,
  }

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private pacienteService: PacientesService,
    private historiasclinicasService: HistoriasclinicasService,
    private toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.pacienteService.verPaciente(this.pacienteId)
      .subscribe(resp => {
        if (resp.ok === true) {
          this.paciente = resp.paciente;
          this.pacienteFormulario.reset({
            nombre: this.paciente.nombre,
            sexo: this.paciente.sexo,
            fechaNacimiento: this.paciente.fechaNacimiento,
            direccion: this.paciente.direccion,
            obraSocial: this.paciente.obraSocial,
            dni: this.paciente.dni,
            estado: this.paciente.estado
          });

        }
      });

    this.cargarHistorias();
  }

  campoEsValidoPaciente(campo: string) {
    return this.pacienteFormulario.controls[campo].errors
      && this.pacienteFormulario.controls[campo].touched;
  }

  guardarPaciente() {
    this.pacienteService.actualizarPaciente(this.pacienteId, this.pacienteFormulario.value)
      .subscribe(async (resp) => {
        const toast = await this.toastController.create({
          message: 'Los datos del paciente fueron guardados correctamente.',
          duration: 3000,
          color: 'primary',
          translucent: true
        });

        await toast.present();
      });
  }

  volverAtras() {
    this.modalCtrl.dismiss();
  }


  borrarPaciente() {
    this.paciente.estado = false;
    this.pacienteService.actualizarPaciente(this.pacienteId, this.paciente)
      .subscribe(async (resp) => {
        const toast = await this.toastController.create({
          message: 'Paciente borrado',
          duration: 3000,
          color: 'warning',
          translucent: true
        });

        await toast.present();
      });
  }

  activarPaciente() {
    this.paciente.estado = true;
    this.pacienteService.actualizarPaciente(this.pacienteId, this.paciente)
      .subscribe(async (resp) => {
        const toast = await this.toastController.create({
          message: 'Paciente activado',
          duration: 3000,
          color: 'primary',
          translucent: true
        });

        await toast.present();
      });
  }

  guardarHistoria() {

    this.nuevaHistoria.historia = this.historiaFormulario.controls['historia'].value;
    this.nuevaHistoria.paciente = this.pacienteId;

    this.historiasclinicasService.nuevaHistoria(this.nuevaHistoria)
      .subscribe(resp => {
        this.historiaFormulario.reset({
          historia: '',
        });
        this.cargarHistorias();
      });

  }

  cargarHistorias() {
    this.historiasclinicasService.verHistoria(this.pacienteId)
      .subscribe((historias: HistoriasResponse) => {
        this.historiaClinica = historias.historia;
        this.historiaClinica = this.historiaClinica.reverse();
      });
  }
}
