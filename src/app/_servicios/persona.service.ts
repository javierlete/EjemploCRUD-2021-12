import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERSONAS } from '../_mocks/mock-personas';
import { Persona } from '../_modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  getPersonas(): Observable<Persona[]> {
    return of(PERSONAS);
  }
}
