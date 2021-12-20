import { Component, OnInit } from '@angular/core';
import { PERSONAS } from 'src/app/_mocks/mock-personas';
import { Persona } from 'src/app/_modelos/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  personas: Persona[] = PERSONAS;
  persona: Persona = {
    id: 0,
    nombre: '',
    apellidos: '',
    telefono: ''
  };

  anyadir(): void {
    this.personas.push(this.persona);
  }

  editar(persona: Persona): void {
    this.persona = persona;
  }

  borrar(persona: Persona): void {
    this.personas = this.personas.filter(p => p !== persona);
  }
}
