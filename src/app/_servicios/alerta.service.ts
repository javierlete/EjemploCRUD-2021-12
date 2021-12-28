import { Injectable } from '@angular/core';
import { Alerta } from '../_modelos/alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  alertas: Alerta[] = [];
  
  nuevaAlerta(alerta: Alerta): void {
    this.alertas.push(alerta);
  }

  success(mensaje: string): void {
    this.nuevaAlerta({ mensaje, tipo: 'success' });
  }

  danger(mensaje: string): void {
    this.nuevaAlerta({ mensaje, tipo: 'danger' });
  }
  
  eliminarAlerta(indice: number): void {
    this.alertas.splice(indice, 1);
  }

  eliminarTodas(): void {
    this.alertas.splice(0, this.alertas.length);
  }
}
