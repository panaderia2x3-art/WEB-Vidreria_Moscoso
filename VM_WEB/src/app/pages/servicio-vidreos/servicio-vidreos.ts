import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-servicio-vidreos',
  styleUrl: './servicio-vidreos.css',
  templateUrl: './servicio-vidreos.html',
})
export class ServicioVidreos {
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
