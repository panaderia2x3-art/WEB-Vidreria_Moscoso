import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio.html',
  styleUrl: './servicio.css',
})
export class Servicio {
  servicios = [
    {
      id: 1,
      image: 'imagenes/build-vidrio-2.jpg',
      alt: 'Instalación de vidrios templados y laminados',
      titulo: 'Servicio de Vidrios',
      descripcion:
        'Suministro e instalación de vidrios templados, laminados y a medida para proyectos residenciales y comerciales con acabados profesionales.',
      tipo: 'vidreos',
    },
    {
      id: 2,
      image: 'imagenes/build-vidrio-2.jpg',
      alt: 'Instalación de techos y estructuras de policarbonato',
      titulo: 'Servicio de Policarbonato',
      descripcion:
        'Diseño e instalación de techos, tragaluces y cerramientos en policarbonato alveolar y compacto de alta resistencia y durabilidad.',
      tipo: 'policarbonato',
    },
  ];
}
