import { Component, Input } from '@angular/core';
import { AlertaTipo } from 'src/app/_tipos/AlertaTipo';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {
  @Input() tipo: AlertaTipo = 'info';
  @Input() mensaje: string = 'Bienvenido a la aplicación de administración de personas';
}
