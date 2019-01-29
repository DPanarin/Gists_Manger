import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private defaultMode = 'text';

  // TODO add enum ng g enum

  constructor() { }

  getMode(filename: string) {
    if (!filename) {
      return this.defaultMode;
    }

    const arrLength = filename.split('.').length;
    const fileExtension = filename.split('.')[arrLength - 1];

    if (fileExtension === 'js' || fileExtension === 'javascript' || fileExtension === 'ts') {
      return 'javascript';
    }
    if (fileExtension === 'json') {
      return 'json';
    }
    if (fileExtension === 'css') {
      return 'css';
    }
    if (fileExtension === 'html') {
      return 'html';
    }
  }
}
