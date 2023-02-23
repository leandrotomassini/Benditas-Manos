import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  public isMenuCollapsed = true;

  constructor() { }



  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
