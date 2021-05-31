import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Partaker} from '../../app/models/partaker'
@Injectable({
  providedIn: 'root'
})
export class PartakerServiceService {
  private url: string = "http://localhost:8080/participante/";
  constructor(
    private http: HttpClient
  ) { }

  //Listar Participantes
  getParkerAll():Observable<Partaker[]>{
    return this.http.get<Partaker[]>(this.url+'/obtener');
  }

  //Crear Participante
  createParker(parker: Partaker): Observable<Partaker>{
    return this.http.post<Partaker>(this.url+'/crear', parker);
  }

  //Actualizar Participante
  updateParker(parker: Partaker): Observable<Partaker>{
    return this.http.put<Partaker>(this.url+'/actualizar', parker);
  }

  //Obtener un Participante
  deleteParker(id: number):Observable<Partaker>{
    return this.http.delete<Partaker>(this.url+'/delete'+id);
  }

  //Obtener un Participante
  getParker(id: number):Observable<Partaker>{
    return this.http.get<Partaker>(this.url+'/'+id);
  }
}
