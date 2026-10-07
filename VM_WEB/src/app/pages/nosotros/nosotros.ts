import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-nosotros',
  styleUrl: './nosotros.css',
  templateUrl: './nosotros.html',
})
export class Nosotros {
  empleados = [
    {
      id: 1,
      foto_emp: 'imagenes/empleado-generico.jpg',
      nombre: 'Empleado 1',
      descripcion: 'Es una descripcion generica de un empleado común XD 123',
    },
    {
      id: 2,
      foto_emp: 'imagenes/empleado-generico.jpg',
      nombre: 'Empleado 2',
      descripcion: 'Es una descripcion generica de un empleado común XD 123',
    },
    {
      id: 3,
      foto_emp: 'imagenes/empleado-generico.jpg',
      nombre: 'Empleado 3',
      descripcion: 'Es una descripcion generica de un empleado común XD 123',
    },
    {
      id: 4,
      foto_emp: 'imagenes/empleado-generico.jpg',
      nombre: 'Empleado 4',
      descripcion: 'Es una descripcion generica de un empleado común XD 123',
    },
  ];
}
