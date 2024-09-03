import { Component, OnInit } from '@angular/core';
import { EventItem } from '../../models/event-item.model';
import { EVENT_ITEMS } from '../../services/event-items.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {

  events = EVENT_ITEMS;

  ngOnInit(){
  }
}
