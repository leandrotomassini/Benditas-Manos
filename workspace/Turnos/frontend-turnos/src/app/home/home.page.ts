import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private webSocketService: WebsocketService
  ) { }

  ngOnInit(): void {
  }

  get usuario() {
    return this.authService.usuario;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
