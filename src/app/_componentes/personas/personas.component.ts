import { Component, OnInit } from '@angular/core';
import { PERSONAS } from 'src/app/_mocks/mock-personas';
import { Persona } from 'src/app/_modelos/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  ngOnInit() {
    alert('getPersonas()');
    this.personas = PERSONAS;
  }

  borrar(id: number) {
    alert(`deletePersona(${id})`);
  }
}
