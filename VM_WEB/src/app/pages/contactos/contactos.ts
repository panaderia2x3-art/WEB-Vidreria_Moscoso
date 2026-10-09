import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-contactos',
  styleUrl: './contactos.css',
  templateUrl: './contactos.html',
  standalone: true,
})
export class Contactos {
    informacion_producto:any=null;
    recibirDatos_Policarbonato(item:any){
      this.informacion_producto = item;
    }
} 
        



