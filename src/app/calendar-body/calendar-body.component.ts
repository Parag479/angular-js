// src/app/calendar-body/calendar-body.component.ts
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.css']
})
export class CalendarBodyComponent implements OnChanges {
  @Input() currentDate: Date;
  days: number[] = [];

  ngOnChanges() {
    this.generateDays();
  }

  generateDays() {
    const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }
}
