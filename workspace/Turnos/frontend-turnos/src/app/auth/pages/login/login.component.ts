import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formSubmited = false;

  public loginForm = this.fb.group({
    correo: ['admin@benditasmanos.com', [Validators.required]],
    password: ['123456', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  login() {
    this.usuarioService.login(this.loginForm.value)
      .subscribe({
        next: resp => {
          this.router.navigateByUrl('/panel-control');
        },
        error: (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      });
  }
}
