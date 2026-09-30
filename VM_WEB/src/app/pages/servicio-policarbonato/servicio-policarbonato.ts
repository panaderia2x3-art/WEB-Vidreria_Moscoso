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
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
        ],
        [
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Proyecto policarbonato' },
        ],
      ],
    },
    {
      id: 'carouselDos',
      titulo: 'Tragaluces y Techos Sol y Sombra',
      paginas: [
        [
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
        ],
        [
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Tragaluz de policarbonato' },
        ],
      ],
    },
    {
      id: 'carouselTres',
      titulo: 'Estructuras y Acabados Especiales',
      paginas: [
        [
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
        ],
        [
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
          { img: 'imagenes/build-vidrio-2.jpg', alt: 'Estructura especial' },
        ],
      ],
    },
  ];
}
