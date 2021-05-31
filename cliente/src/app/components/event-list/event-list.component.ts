import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import {EventServiceService} from '../../services/event-service.service'
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(
    private eventService: EventServiceService
  ) { }

  events :Event[] = [];

  ngOnInit(): void {
    this.eventService.getEventAll().subscribe(
      e => this.events = e
    );
  }

}
