import { Component } from '@angular/core';
import { EVENT_ITEMS } from '../../services/event-items.service';

@Component({
  selector: 'app-leaderbord',
  templateUrl: './leaderbord.component.html',
  styleUrl: './leaderbord.component.scss'
})
export class LeaderbordComponent {
  events = EVENT_ITEMS;
}
