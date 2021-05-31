import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Event} from '../../app/models/event'
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private url: string = "http://localhost:8080/eventos/";
  constructor(
    private http: HttpClient
  ) { }

  //Listar eventos
  getEventAll():Observable<Event[]>{
    return this.http.get<Event[]>(this.url+'/obtener');
  }
}
