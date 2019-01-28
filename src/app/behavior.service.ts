import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  onTokenCreate = new EventEmitter();

  constructor() { }
}
