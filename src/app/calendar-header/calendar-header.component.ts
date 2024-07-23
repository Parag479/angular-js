// src/app/calendar-header/calendar-header.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})
export class CalendarHeaderComponent {
  @Output() monthChanged = new EventEmitter<Date>();

  currentDate = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.monthChanged.emit(this.currentDate);
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.monthChanged.emit(this.currentDate);
  }
}
