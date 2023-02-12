import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Paciente } from 'src/app/interfaces/pacientes';

import { PacientesService } from 'src/app/services/pacientes.service';
import { HistoriaClinicaComponent } from '../historia-clinica/historia-clinica.component';
import { NuevoPacienteComponent } from '../nuevo-paciente/nuevo-paciente.component';

@Component({
  selector: 'app-tabla-pacientes',
  templateUrl: './tabla-pacientes.component.html',
  styleUrls: ['./tabla-pacientes.component.scss'],
})
export class TablaPacientesComponent implements OnInit {

  activos: boolean = true;
  textoBuscar: string = '';

  pacientes: Paciente[] = [];

  constructor(
    private pacientesService: PacientesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.cargarPacientes();
  }

  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }

  async verHistoria(pacienteId: string) {
    const modal = await this.modalCtrl.create({
      component: HistoriaClinicaComponent,
      componentProps: {
        pacienteId,
      }
    });

    await modal.present();

    modal.onWillDismiss().then(() => {
      this.cargarPacientes();
    });

  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: NuevoPacienteComponent
    });

    await modal.present();

    modal.onWillDismiss().then(() => {
      this.cargarPacientes();
    });
  }

  cargarPacientes() {
    this.pacientesService.obtenerPacientes().subscribe(resp => {
      this.pacientes = resp.pacientes;
    });
  }

}
