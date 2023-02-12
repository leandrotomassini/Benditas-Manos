import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { AuthResponse, Usuario } from '../interfaces/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.base_url;
  private _usuario!: Usuario;

  constructor(private http: HttpClient, private router: Router) { }

  get usuario() {
    return { ...this._usuario };
  }

  login(correo: string, password: string) {

    const url = `${this.baseUrl}/auth/login`;
    const body = { correo, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            this.localStorageSetItem(resp);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      );
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          this.localStorageSetItem(resp);
          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }

  localStorageSetItem(resp: AuthResponse) {

    localStorage.setItem('token', resp.token!);

    this._usuario = {
      nombre: resp.usuario.nombre,
      correo: resp.usuario.correo,
      rol: resp.usuario.rol,
      estado: resp.usuario.estado,
      uid: resp.usuario.uid
    }
  }


  logout() {
    this.router.navigateByUrl('/');
    localStorage.clear();
  }
}

