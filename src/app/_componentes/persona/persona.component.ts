import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.persona.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.persona.id) {
      alert(`getPersona(${this.persona.id})`);
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
