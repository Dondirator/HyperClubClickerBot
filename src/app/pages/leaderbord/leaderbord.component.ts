import { Component } from '@angular/core';
import { EVENT_ITEMS } from '../../services/event-items.service';
import { EventItem } from '../../models/event-item.model';

@Component({
  selector: 'app-leaderbord',
  templateUrl: './leaderbord.component.html',
  styleUrl: './leaderbord.component.scss'
})
export class LeaderbordComponent {
  events = EVENT_ITEMS;
  selectedEvent: EventItem | null = null;

  openModal(event: EventItem){
    this.selectedEvent = event
  }
  closeModal() {
    this.selectedEvent = null;
  }
}
