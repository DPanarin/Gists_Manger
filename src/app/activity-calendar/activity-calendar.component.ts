import {Component, Input, OnInit} from '@angular/core';
import {GistInterface} from '../gist-interface';


@Component({
  selector: 'app-activity-calendar',
  templateUrl: './activity-calendar.component.html',
  styleUrls: ['./activity-calendar.component.scss']
})
export class ActivityCalendarComponent implements OnInit {

  @Input() gists: GistInterface[];

  weekDays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];

  monthDays: number[];

  constructor() { }

  ngOnInit() {
    this.fillCalendar();
  }

  private fillCalendar() {
    const daysInCurrentMonth = this.daysInThisMonth();
    const monthStarts = this.weekDays.indexOf(this.getFirstDateOfMonth());

    this.monthDays = Array(35).fill(0, 0, 35);
    for (let i = monthStarts; i <= daysInCurrentMonth; i++) {
      this.monthDays[i] = i;
    }

  }

  daysInThisMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }

  getFirstDateOfMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth()).toString().split(' ')[0];
  }

  hasActivity(day: number) {

    return this.gists.some(gist => this.datesEqual(gist, day));

  }

  // private isEqual = function (gist: GistInterface, day: number) {
  //   return new Date(gist.updated_at).getDate() === day || new Date(gist.created_at).getDate() === day;
  // };

  datesEqual(gist: GistInterface, dateForCheck: number) {
    return new Date(gist.updated_at).getDate() === dateForCheck || new Date(gist.created_at).getDate() === dateForCheck;
  }

}
