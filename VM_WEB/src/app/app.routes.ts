import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Servicio } from './pages/servicio/servicio';
import { ServicioPolicarbonato } from './pages/servicio-policarbonato/servicio-policarbonato';
import { ServicioVidreos } from './pages/servicio-vidreos/servicio-vidreos';
import { Contactos } from './pages/contactos/contactos';
import { Nosotros } from './pages/nosotros/nosotros';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'inicio', component: Inicio },
  { path: 'servicio', component: Servicio },
  { path: 'servicio-policarbonato', component: ServicioPolicarbonato },
  { path: 'servicio-vidreos', component: ServicioVidreos },
  { path: 'contacto', component: Contactos },
  { path: 'nosotros', component: Nosotros },
  { path: '**', redirectTo: '' }, //Si escribe una ruta que no existe lo manda al inicio-
];
