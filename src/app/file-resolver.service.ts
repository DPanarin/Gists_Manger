import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {FileInterface} from './file-interface';

@Injectable({
  providedIn: 'root'
})
export class FileResolverService implements Resolve<FileInterface> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FileInterface> {
    return route.parent.data.gist.files[route.paramMap.get('filename')];
  }
}
