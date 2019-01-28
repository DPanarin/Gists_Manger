import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeDifferenceService {

  constructor() { }

  getTimeDifference(updated_at: string) {
    const lastUpdate = new Date(updated_at);
    const currentDate = new Date();

    const differenceInMinutes = ((currentDate.getTime() - lastUpdate.getTime()) / 1000) / 60;

    if (differenceInMinutes < 60) {
      return `updated ${differenceInMinutes} minute(s) ago`;
    }

    if (60 < differenceInMinutes && differenceInMinutes < 1440) {
      return `updated ${Math.round(differenceInMinutes / 60)} hour(s) ago`;
    }

    if (differenceInMinutes > 1440) {
      return `updated ${Math.round(differenceInMinutes / 60 / 24)} day(s) ago`;
    }

  }
}
