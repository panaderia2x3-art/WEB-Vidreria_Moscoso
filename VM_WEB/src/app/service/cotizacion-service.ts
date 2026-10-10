import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CotizacionService {
  private productoSeleccionado: any = null;

  setProducto(producto: any) {
    this.productoSeleccionado = producto;
    console.log('📦 [Servicio] Producto guardado con éxito:', producto);
  }

  getProducto() {
    console.log('📤 [Servicio] Producto entregado:', this.productoSeleccionado);
    return this.productoSeleccionado;
  }
}
