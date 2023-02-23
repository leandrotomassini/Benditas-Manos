import { Component, OnInit } from '@angular/core';

interface Promocion {
  id: number;
  promocion: string;
  precio: number;
}

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  promos: Promocion[] = [
    { id: 1, promocion: 'Promoción 1', precio: 10.99 },
    { id: 2, promocion: 'Promoción 2', precio: 25.99 },
    { id: 3, promocion: 'Promoción 3', precio: 5.99 },
    { id: 4, promocion: 'Promoción 4', precio: 8.99 },
    { id: 5, promocion: 'Promoción 5', precio: 19.99 },
    { id: 6, promocion: 'Promoción 6', precio: 15.99 },
    { id: 7, promocion: 'Promoción 7', precio: 12.99 },
    { id: 8, promocion: 'Promoción 8', precio: 9.99 },
    { id: 9, promocion: 'Promoción 9', precio: 7.99 },
    { id: 10, promocion: 'Promoción 10', precio: 22.99 }
  ];

  filteredPromos: Promocion[] = this.promos;
  selectedPromo: Promocion | null = null;
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter() {
    this.filteredPromos = this.promos.filter(promo => {
      return promo.promocion.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  sortBy(key: keyof Promocion): void {
    this.filteredPromos.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  }

  selectRow(promo: Promocion): void {
    this.selectedPromo = promo;
  }

  editPromo(promo: Promocion): void {
    // Implementar función para editar una promoción
  }

  deletePromo(promo: Promocion): void {
    // Implementar función para borrar una promoción
  }

}
