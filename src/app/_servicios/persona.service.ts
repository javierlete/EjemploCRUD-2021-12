import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap } from 'rxjs';
import { Persona } from '../_modelos/persona';
import { AlertaService } from './alerta.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  success: Function;
  danger: Function;

  url = 'http://localhost:3000/personas/';

  constructor(private http: HttpClient, private alertaService: AlertaService) {
    this.success = this.alertaService.success.bind(this.alertaService);
    this.danger = this.alertaService.danger.bind(this.alertaService);
  }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url).pipe(
      tap(_ => this.success('Personas cargadas correctamente')),
      catchError(error => {
        this.danger('Error al cargar las personas: ' + error.message);
        return of([] as Persona[]);
      })
    );
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + id).pipe(
      tap(_ => this.success('Persona cargada correctamente')),
      catchError(error => {
        this.danger('Error al cargar la persona ' + error);
        return of({} as Persona);
      })
    );
  }

  postPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona).pipe(
      tap(_ => this.success('Persona creada correctamente')),
      catchError( (error, persona$) => {
        this.danger('Error al crear la persona ' + error.message);
        return persona$;
      })
    );
  }

  putPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.url + persona.id, persona).pipe(
      tap(_ => this.success('Persona actualizada correctamente')),
      catchError( (error, persona$) => {
        this.danger('Error al actualizar la persona ' + error.message);
        return persona$;
      })
    );
  }
  
  deletePersona(id: number): Observable<any> {
    return this.http.delete(this.url + id).pipe(
      tap(_ => this.success('Persona eliminada correctamente')),
      catchError( error => {
        this.danger('Error al eliminar la persona ' + error.message);
        return of({});
      })
    );
  }
}
