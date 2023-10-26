import { Component } from '@angular/core';

@Component({
  selector: 'app-weekdays-selection',
  templateUrl: './weekdays-selection.component.html',
  styleUrls: ['./weekdays-selection.component.css']
})
export class WeekdaysSelectionComponent {
  Saturday:boolean = false;
  Sunday:boolean = true;

  dateStart: Date = new Date();
  dateEnd: Date = new Date();

  days: any[] = [{ start: null, end: null }];

  addTimeSlot() {

    this.days.push({ start: null, end: null });
  }

  removeTimeSlot(index: number) {
    if (this.days.length > 1) {
      this.days.splice(index, 1);
    }
  }

}
