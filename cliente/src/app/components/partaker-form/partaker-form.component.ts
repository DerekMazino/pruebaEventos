import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../../services/event-service.service';
import {Event} from '../../models/event';
@Component({
  selector: 'app-partaker-form',
  templateUrl: './partaker-form.component.html',
  styleUrls: ['./partaker-form.component.css']
})
export class PartakerFormComponent implements OnInit {

  constructor(private eventService: EventServiceService) { }
  events :Event[] = [];

  ngOnInit(): void {
    this.eventService.getEventAll().subscribe(
      e => this.events = e
    );
  }

}
