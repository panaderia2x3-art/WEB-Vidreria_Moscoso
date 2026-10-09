import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicio-policarbonato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio-policarbonato.html',
  styleUrl: './servicio-policarbonato.css',
})
export class ServicioPolicarbonato {
  carruseles = [
    {
      id: 'carouselUno',
      titulo: 'Instalaciones Residenciales',

      paginas: [
        [
          { id: 1, titulo: 'Titulo 1', descripcion: 'Descripcion generica 1', img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { id: 2, titulo: 'Titulo 2', descripcion: 'Descripcion generica 2', img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { id: 3, titulo: 'Titulo 3', descripcion: 'Descripcion generica 3', img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
        ],
        [
          { id: 4, titulo: 'Titulo 4', descripcion: 'Descripcion generica 4', img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { id: 5, titulo: 'Titulo 5', descripcion: 'Descripcion generica 5', img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { id: 6, titulo: 'Titulo 6', descripcion: 'Descripcion generica 6', img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
        ],
      ],
    },
    {
      id: 'carouselDos',
      titulo: 'Tragaluces y Techos Sol y Sombra',
      paginas: [
        [
          { id: 7, titulo: 'Titulo 7', descripcion: 'Descripcion generica 7', img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { id: 8, titulo: 'Titulo 8', descripcion: 'Descripcion generica 8', img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { id: 9, titulo: 'Titulo 9', descripcion: 'Descripcion generica 9', img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
        ],
        [
          { id: 10, titulo: 'Titulo 10', descripcion: 'Descripcion generica 10', img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { id: 11, titulo: 'Titulo 11', descripcion: 'Descripcion generica 11', img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { id: 12, titulo: 'Titulo 12', descripcion: 'Descripcion generica 12', img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
        ],
      ],
    },
    {
      id: 'carouselTres',
      titulo: 'Estructuras y Acabados Especiales',
      paginas: [
        [
          { id: 13, titulo: 'Titulo 13', descripcion: 'Descripcion generica 13', img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { id: 14, titulo: 'Titulo 14', descripcion: 'Descripcion generica 14', img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { id: 15, titulo: 'Titulo 15', descripcion: 'Descripcion generica 15', img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
        ],
        [
          { id: 16, titulo: 'Titulo 16', descripcion: 'Descripcion generica 16', img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { id: 17, titulo: 'Titulo 17', descripcion: 'Descripcion generica 17', img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { id: 18, titulo: 'Titulo 18', descripcion: 'Descripcion generica 18', img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
        ],
      ],
    },
  ];

  modalAbierto = false;
  itemSeleccionado: any = null;
  abrirModal(id: number, descripcion: string, img: string, alt: string, titulo: string) {
    this.modalAbierto = true;
    this.itemSeleccionado = { id, descripcion, img, alt, titulo };
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.itemSeleccionado = null;
  } 
}
