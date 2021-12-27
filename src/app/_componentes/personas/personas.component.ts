import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/_modelos/persona';
import { PersonaService } from 'src/app/_servicios/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit() {
    this.cargarPersonas();
  }

  borrar(id: number) {
    this.personaService.deletePersona(id).subscribe(
      _ => this.cargarPersonas()
    );
  }

  cargarPersonas() {
    this.personaService.getPersonas().subscribe(personas => this.personas = personas);
  }
}
