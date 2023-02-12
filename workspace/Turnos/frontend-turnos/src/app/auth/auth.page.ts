import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  cargando: boolean = false;

  loginFormulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.min(3)]],
  });

  handlerMessage = '';
  roleMessage = '';

  constructor(private toastController: ToastController, private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginFormulario.reset({
      usuario: '',
      password: ''
    })
  }


  campoEsValido(campo: string) {
    return this.loginFormulario.controls[campo].errors
      && this.loginFormulario.controls[campo].touched;
  }

  login() {

    if (this.loginFormulario.invalid) {
      this.loginFormulario.markAllAsTouched();
      return;
    }

    const { usuario, password } = this.loginFormulario.value;
    this.cargando = true;

    this.authService.login(usuario, password)
      .subscribe(ok => {
        if (ok === true) {
          this.router.navigateByUrl('/home');
          this.cargando = false;
        } else {
          this.presentToast();
        }
      });

    this.loginFormulario.reset();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'El Usuario o la contraseña son incorrectos.',
      duration: 3000,
      position: 'middle',
      color: 'primary',
      translucent: true
    });

    await toast.present();
  }

}
