import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertaTipo } from 'src/app/_tipos/AlertaTipo';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Input() tipo: AlertaTipo = 'info';
  @Input() mensaje: string = 'Bienvenido a la aplicación de administración de personas';

  @Output() cerrar = new EventEmitter();

  ngOnInit() {
    // setTimeout(this.cerrarAlerta.bind(this), 5000);
    setTimeout(() => this.cerrarAlerta(), 50000);
  }

  cerrarAlerta(): void {
    console.log(this);
    this.cerrar.emit();
  }
}
