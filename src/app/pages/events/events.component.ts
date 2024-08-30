import { Component, OnInit } from '@angular/core';
import { EventItem } from '../../models/event-item.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
 events: EventItem[] = [];

  ngOnInit(){
    this.events = [
      new EventItem('Toncoin','../../../assets/events/ton.png',true,false,false),
      new EventItem('BNB Smart Chain','../../../assets/events/bnb.png',true,false,false),
      new EventItem('Arbitrum','../../../assets/events/arbitrum.png',true,false,false),
      new EventItem('Optimism','../../../assets/events/op.png',true,false,false),
      new EventItem('Base','../../../assets/events/base.png',true,false,false),
      new EventItem('Polygon','../../../assets/events/polygon.png',true,false,false),
      new EventItem('Avalanche','../../../assets/events/avalanche.png',true,false,false),
      new EventItem('Blast','../../../assets/events/blast.png',true,false,false),
      new EventItem('zkSync Era','../../../assets/events/zks.png',true,false,false),
      new EventItem('Linea','../../../assets/events/linea.png',true,false,false),
      new EventItem('Scroll','../../../assets/events/scroll.png',true,false,false),
      new EventItem('Solana','../../../assets/events/solana.png',true,false,false),
      new EventItem('Berachain','../../../assets/events/bera.png',true,false,false),
      new EventItem('Aptos','../../../assets/events/aptos.png',true,false,false),
      new EventItem('Sui','../../../assets/events/sui.png',true,false,false),
      new EventItem('TRON','../../../assets/events/tron.png',true,false,false),
      
    ]
  }
}
