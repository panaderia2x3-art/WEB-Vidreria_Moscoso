import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizacionService } from '../../service/cotizacion-service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-servicio-vidreos',
  styleUrl: './servicio-vidreos.scss',
  templateUrl: './servicio-vidreos.html',
})
export class ServicioVidreos {
  carruseles = [
    {
      id: 'carouselUno',
      titulo: 'Instalaciones Residenciales',

      paginas: [
        [
          {
            id: 1,
            titulo: 'Título 1',
            descripcion: 'descripcion general 1',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Proyecto policarbonato',
          },
          {
            id: 2,
            titulo: 'Título 2',
            descripcion: 'descripcion general 2',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Proyecto policarbonato',
          },
          {
            id: 3,
            titulo: 'Título 3',
            descripcion: 'descripcion general 3',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Proyecto policarbonato',
          },
        ],
        [
          {
            id: 4,
            titulo: 'Título 4',
            descripcion: 'descripcion general 4',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Proyecto policarbonato',
          },
          {
            id: 5,
            titulo: 'Título 5',
            descripcion: 'descripcion general 5',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Proyecto policarbonato',
          },
          {
            id: 6,
            titulo: 'Título 6',
            descripcion: 'descripcion general 6',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Proyecto policarbonato',
          },
        ],
      ],
    },
    {
      id: 'carouselDos',
      titulo: 'Tragaluces y Techos Sol y Sombra',
      paginas: [
        [
          {
            id: 7,
            titulo: 'Título 7',
            descripcion: 'descripcion general 7',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Tragaluz de policarbonato',
          },
          {
            id: 8,
            titulo: 'Título 8',
            descripcion: 'descripcion general 8',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Tragaluz de policarbonato',
          },
          {
            id: 9,
            titulo: 'Título 9',
            descripcion: 'descripcion general 9',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Tragaluz de policarbonato',
          },
        ],
        [
          {
            id: 10,
            titulo: 'Título 10',
            descripcion: 'descripcion general 10',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Tragaluz de policarbonato',
          },
          {
            id: 11,
            titulo: 'Título 11',
            descripcion: 'descripcion general 11',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Tragaluz de policarbonato',
          },
          {
            id: 12,
            titulo: 'Título 12',
            descripcion: 'descripcion general 12',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Tragaluz de policarbonato',
          },
        ],
      ],
    },
    {
      id: 'carouselTres',
      titulo: 'Estructuras y Acabados Especiales',
      paginas: [
        [
          {
            id: 13,
            titulo: 'Título 13',
            descripcion: 'descripcion general 13',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Estructura especial',
          },
          {
            id: 14,
            titulo: 'Título 14',
            descripcion: 'descripcion general 14',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Estructura especial',
          },
          {
            id: 15,
            titulo: 'Título 15',
            descripcion: 'descripcion general 15',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Estructura especial',
          },
        ],
        [
          {
            id: 16,
            titulo: 'Título 16',
            descripcion: 'descripcion general 16',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Estructura especial',
          },
          {
            id: 17,
            titulo: 'Título 17',
            descripcion: 'descripcion general 17',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Estructura especial',
          },
          {
            id: 18,
            titulo: 'Título 18',
            descripcion: 'descripcion general 18',
            img: 'imagenes/build-vidrio-2.jpg',
            alt: 'Estructura especial',
          },
        ],
      ],
    },
  ];
  modalAbierto = false;
  itemSeleccionado: any = null;

  abrirModal(iden: number, descripcion: string, img: string, alt: string, titulo: string) {
    this.modalAbierto = true;
    this.itemSeleccionado = {
      id: iden,
      descripcion: descripcion,
      img: img,
      alt: alt,
      titulo: titulo,
    };
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.itemSeleccionado = null;
  }

  private cotizacionService = inject(CotizacionService);
  private router = inject(Router);

  cotizarProducto(item: any) {
    this.cotizacionService.setProducto(item);
    this.modalAbierto = false;
    this.router.navigate(['/contacto']);
  }
}
