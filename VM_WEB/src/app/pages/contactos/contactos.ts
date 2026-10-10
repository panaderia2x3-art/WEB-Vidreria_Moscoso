import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizacionService } from '../../service/cotizacion-service';

@Component({
  imports: [CommonModule],
  selector: 'app-contactos',
  styleUrl: './contactos.css',
  templateUrl: './contactos.html',
  standalone: true,
})
export class Contactos implements OnInit {
  private cotizacionService = inject(CotizacionService);
  informacion_producto: any = null;
  textoConsulta: string = '';

  ngOnInit() {
    this.informacion_producto = this.cotizacionService.getProducto();
    console.log(
      '📥 [Contactos] Producto recibido en la página de contactos:',
      this.informacion_producto,
    );
    if (this.informacion_producto) {
      this.textoConsulta = `Hola, me interesa cotizar el siguiente producto:
- Título: ${this.informacion_producto.titulo}
- Descripción: ${this.informacion_producto.descripcion}`;
    }
  }
}
