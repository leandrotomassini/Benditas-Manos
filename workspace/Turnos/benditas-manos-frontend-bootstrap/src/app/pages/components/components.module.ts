import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuLateralComponent,
    MenuPrincipalComponent
  ],
  exports: [
    MenuLateralComponent,
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
