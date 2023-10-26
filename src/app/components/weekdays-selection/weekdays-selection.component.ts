import { Component } from '@angular/core';

@Component({
  selector: 'app-weekdays-selection',
  templateUrl: './weekdays-selection.component.html',
  styleUrls: ['./weekdays-selection.component.css']
})
export class WeekdaysSelectionComponent {
  Saturday: boolean = false;
  Sunday: boolean = true;

  dateStart: Date = new Date();
  dateEnd: Date = new Date();

  days: any[] = [{ start: null, end: null }];
  days1: any[] = [{ start: null, end: null }];
  days2: any[] = [{ start: null, end: null }];
  days3: any[] = [{ start: null, end: null }];
  days4: any[] = [{ start: null, end: null }];

  addTimeSlot() {

    this.days.push({ start: null, end: null });
  }

  addTimeSlot1() {

    this.days1.push({ start: null, end: null });
  }
  addTimeSlot2() {

    this.days2.push({ start: null, end: null });
  } addTimeSlot3() {

    this.days3.push({ start: null, end: null });
  } addTimeSlot4() {

    this.days4.push({ start: null, end: null });
  }

  removeTimeSlot(index: number) {
    if (this.days.length > 1) {
      this.days.splice(index, 1);
    }
  }
  removeTimeSlot1(index: number) {
    if (this.days1.length > 1) {
      this.days1.splice(index, 1);
    }
  } removeTimeSlot2(index: number) {
    if (this.days2.length > 1) {
      this.days2.splice(index, 1);
    }
  } removeTimeSlot3(index: number) {
    if (this.days3.length > 1) {
      this.days3.splice(index, 1);
    }
  } removeTimeSlot4(index: number) {
    if (this.days4.length > 1) {
      this.days4.splice(index, 1);
    }
  }

}
