import { Component } from '@angular/core';
import { Alerta } from 'src/app/_modelos/alerta';
import { AlertaService } from 'src/app/_servicios/alerta.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {
  constructor(public alertaService: AlertaService) { }
}
