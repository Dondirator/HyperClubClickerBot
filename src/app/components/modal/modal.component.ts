import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { EventItem } from '../../models/event-item.model';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() event: EventItem | null = null;
  @Output() closeModal = new EventEmitter<void>()

  close() {
    this.closeModal.emit()
  }
}
