import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../_modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:3000/personas/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + id);
  }

  postPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona);
  }
  
  putPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.url + persona.id, persona);
  }

  deletePersona(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
