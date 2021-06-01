import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../models/event'
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  mostrar: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(event)
  }

}
