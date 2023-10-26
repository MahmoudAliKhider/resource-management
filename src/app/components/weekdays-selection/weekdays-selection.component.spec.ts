import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysSelectionComponent } from './weekdays-selection.component';

describe('WeekdaysSelectionComponent', () => {
  let component: WeekdaysSelectionComponent;
  let fixture: ComponentFixture<WeekdaysSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdaysSelectionComponent]
    });
    fixture = TestBed.createComponent(WeekdaysSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
