import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurredCircleComponent } from './blurred-circle.component';

describe('BlurredCircleComponent', () => {
  let component: BlurredCircleComponent;
  let fixture: ComponentFixture<BlurredCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlurredCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurredCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
