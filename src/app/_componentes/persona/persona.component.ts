import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/_modelos/persona';
import { PersonaService } from 'src/app/_servicios/persona.service';

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

  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    this.persona.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.persona.id) {
      this.personaService.getPersona(this.persona.id).subscribe(persona => this.persona = persona);
    }
  }

  anyadir() {
    alert(`anyadir(${JSON.stringify(this.persona)})`);

    if(this.persona.id) {
      alert(`putPersona(${JSON.stringify(this.persona)})`);
    } else {
      alert(`postPersona(${JSON.stringify(this.persona)})`);
    }
  }
}
