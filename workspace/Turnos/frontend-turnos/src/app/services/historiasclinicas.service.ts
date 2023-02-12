import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Historia, HistoriasResponse } from '../interfaces/historias';

const base_url = `${environment.base_url}/historias`;

@Injectable({
  providedIn: 'root'
})
export class HistoriasclinicasService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  nuevaHistoria(historia: Historia): Observable<Historia> {
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.httpClient.post<Historia>(base_url, historia, { headers });
  }

  verHistoria(idPaciente: string) {
    const urlHistorias = `${base_url}/${idPaciente}`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.httpClient.get<HistoriasResponse>(urlHistorias, { headers });
  }
}
