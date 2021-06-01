import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../../services/event-service.service';
import {PartakerServiceService} from '../../services/partaker-service.service';
import {Event} from '../../models/event';
import {Partaker} from '../../models/partaker';
@Component({
  selector: 'app-partaker-form',
  templateUrl: './partaker-form.component.html',
  styleUrls: ['./partaker-form.component.css']
})
export class PartakerFormComponent implements OnInit {

  partaker: Partaker = new Partaker();
  title: string = "Registro de Participante";

  constructor(
    private eventService: EventServiceService,
    private parkaterService: PartakerServiceService,
    ) { }
  events :Event[] = [];
  mensaje: Partaker;
  ngOnInit(): void {
    this.eventService.getEventAll().subscribe(
      e => this.events = e
    );
  }

  create(){
    console.log(this.partaker);
      this.parkaterService.createParker(this.partaker).subscribe(
        e => this.mensaje = e
      );
  }

}
