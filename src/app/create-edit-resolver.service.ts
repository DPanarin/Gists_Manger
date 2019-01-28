import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GitHubService} from './git-hub.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEditResolverService implements Resolve<any> {

  constructor(private apiService: GitHubService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    if (route.parent.paramMap.get('id')) {
      return  this.apiService.getGist(route.parent.paramMap.get('id'));
    }
    return route.url.toString().includes('edit');
  }
}
