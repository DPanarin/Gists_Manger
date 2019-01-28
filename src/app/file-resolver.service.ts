import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileResolverService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return route.parent.data.gist.files[route.paramMap.get('filename')];
  }
}
