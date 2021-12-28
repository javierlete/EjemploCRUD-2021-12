import { Component } from '@angular/core';
import { Alerta } from 'src/app/_modelos/alerta';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {
  alertas: Alerta[] = [
    { tipo: 'info', mensaje: 'Bienvenido a la aplicación de administración de personas' },
    { tipo: 'success', mensaje: 'Se ha agregado una nueva persona' },
    { tipo: 'warning', mensaje: 'Se ha modificado una persona' },
    { tipo: 'danger', mensaje: 'Se ha eliminado una persona' },
  ];
}
