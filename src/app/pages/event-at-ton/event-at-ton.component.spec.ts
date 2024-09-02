import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAtTonComponent } from './event-at-ton.component';

describe('EventAtTonComponent', () => {
  let component: EventAtTonComponent;
  let fixture: ComponentFixture<EventAtTonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventAtTonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAtTonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
