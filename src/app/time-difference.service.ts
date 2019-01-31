import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeDifferenceService {

  private minutesInHour = 60;
  private minutesInDay = 1440;
  private hoursInDay = 24;
  private millisecondsInSecond = 1000;
  private secondsInMinute = 60;

  getTimeDifference(updated_at: string) {
    const lastUpdate = new Date(updated_at);
    const currentDate = new Date();

    const differenceInMinutes = ((currentDate.getTime() - lastUpdate.getTime()) / this.millisecondsInSecond) / this.secondsInMinute;

    if (differenceInMinutes < this.minutesInHour) {
      return `updated ${differenceInMinutes} minute(s) ago`;
    }

    if (this.minutesInHour < differenceInMinutes && differenceInMinutes < this.minutesInDay) {
      return `updated ${Math.round(differenceInMinutes / this.minutesInHour)} hour(s) ago`;
    }

    if (differenceInMinutes > this.minutesInDay) {
      return `updated ${Math.round(differenceInMinutes / this.minutesInHour / this.hoursInDay)} day(s) ago`;
    }

  }
}
