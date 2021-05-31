import { Component, OnInit, Input } from '@angular/core';
import {Partaker} from '../../models/partaker';
import {PartakerServiceService} from '../../services/partaker-service.service'
@Component({
  selector: 'app-partaker-list',
  templateUrl: './partaker-list.component.html',
  styleUrls: ['./partaker-list.component.css']
})
export class PartakerListComponent implements OnInit {
  @Input() event: Event;
  constructor(
    private partakerService: PartakerServiceService
  ) { }
  partakers :Partaker[] = [];
  ngOnInit(): void {
    this.partakerService.getParkerAll().subscribe(
      e => this.partakers = e
    );
  }

}
