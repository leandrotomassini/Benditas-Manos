import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Paciente, PacienteResponse, PacientesResponse } from '../interfaces/pacientes';
import { AuthService } from './auth.service';

const base_url = `${environment.base_url}/pacientes`;

@Injectable({
  providedIn: 'root'
})
export class PacientesService {


  constructor(
    private toastCtrl: ToastController,
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  obtenerPacientes(): Observable<PacientesResponse> {
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.httpClient.get<PacientesResponse>(base_url, { headers });
  }

  nuevoPaciente(paciente: Paciente): Observable<Paciente> {
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.httpClient.post<Paciente>(base_url, paciente, { headers });
  }

  actualizarPaciente(idPaciente: string, paciente: Paciente): Observable<Paciente> {
    const urlId = `${environment.base_url}/pacientes/${idPaciente}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.httpClient.put<Paciente>(urlId, paciente, { headers });
  }

  verPaciente(id: string): Observable<PacienteResponse> {
    const urlId = `${environment.base_url}/pacientes/${id}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.httpClient.get<PacienteResponse>(urlId, { headers });
  }

}
