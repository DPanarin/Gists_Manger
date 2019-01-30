import {Injectable} from '@angular/core';
import {Extentions} from './extentions.enum';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  getMode(filename: string) {
    if (!filename) {
      return Extentions.defaultMode;
    }

    const arrLength = filename.split('.').length;
    const fileExtension = filename.split('.')[arrLength - 1];

    if (fileExtension === 'js' || fileExtension === 'javascript' || fileExtension === 'ts') {
      return Extentions.javascript;
    }
    if (fileExtension === 'json') {
      return Extentions.json;
    }
    if (fileExtension === 'css') {
      return Extentions.css;
    }
    if (fileExtension === 'html') {
      return Extentions.html;
    }
  }
}
