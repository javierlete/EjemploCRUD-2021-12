import { Component } from '@angular/core';
import { Persona } from 'src/app/_modelos/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  persona: Persona = {
    id: 0,
    nombre: '',
    apellidos: '',
    telefono: ''
  };
}
