import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {
  @Input() tipo: 'info'|'success'|'warning'|'danger' = 'info';
  @Input() mensaje: string = 'Bienvenido a la aplicación de administración de personas';
}
