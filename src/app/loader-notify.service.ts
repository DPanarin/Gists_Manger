import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderNotifyService {

  private pending: string[] = [];
  private requestFinished = new Subject<boolean>();

  setRequestStatus(id: string, status: boolean) {
    if (status === false) {
      this.pending.push(id);
    } else {
      const index = this.pending.indexOf(id);

      if (index !== -1) {
        this.pending.splice(index, 1);
      }
    }
    this.requestFinished.next(this.pending.length === 0);
  }


  getRequestStatus()  {
    return this.requestFinished.asObservable();
  }
}
