import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-servicio',
  styleUrl: './servicio.css',
  templateUrl: './servicio.html',
  standalone: true,
})
export class Servicio {
  servicios = [{}, {}];
}
