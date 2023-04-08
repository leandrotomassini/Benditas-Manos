import { AfterViewInit, Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios.service';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit() {
    this.googleInit();
  }

  googleInit() {

    google.accounts.id.initialize({
      client_id: "741201888674-e9nb12dhrsi1lsqql4mor1t9980vp132.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }
    );
  }

  handleCredentialResponse(response: any) {
    this.usuarioService.loginGoogle(response.credential)
      .subscribe(
        (resp) => {
          this.ngZone.run(() => {
            this.router.navigateByUrl('/panel-control');
          });
        }, (err) => {
          console.log("No se puede iniciar sesión: ", err );
        }
      );
  }
}
