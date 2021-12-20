import { Component, OnInit } from '@angular/core';
import { PERSONAS } from 'src/app/_mocks/mock-personas';
import { Persona } from 'src/app/_modelos/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  personas: Persona[] = PERSONAS; // 0x100
  persona: Persona = { // 0x500 ... (segundo -> 0x300)
    id: 0,
    nombre: '',
    apellidos: '',
    telefono: ''
  };

  anyadir(): void {
    this.personas.push(this.persona);
  }

  editar(persona: Persona): void { // (segundo -> 0x300)
    this.persona = persona; // 0x300
  }

  borrar(persona: Persona): void {
    this.personas = this.personas.filter(p => p !== persona);
  }
}
