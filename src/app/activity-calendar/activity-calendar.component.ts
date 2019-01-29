import {Component, OnInit} from '@angular/core';
import {GistInterface} from '../gist-interface';
import {GitHubService} from '../git-hub.service';

@Component({
  selector: 'app-activity-calendar',
  templateUrl: './activity-calendar.component.html',
  styleUrls: ['./activity-calendar.component.scss']
})
export class ActivityCalendarComponent implements OnInit {

  weekDays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];

  gists: GistInterface[];

  monthDays: number[];

  constructor(private gitService: GitHubService) {
  }

  ngOnInit() {
    this.fillCalendar();
    this.gitService.getGistsList().subscribe(gistsData => {
      this.gists = gistsData;
    });
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
    for (const gist of this.gists) {
      if (new Date(gist.updated_at).getDate() === day) {
        return true;
      }
    }

    return false;

  }

}
