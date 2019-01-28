import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GitHubService} from './git-hub.service';

@Injectable({
  providedIn: 'root'
})
export class GistResolverService implements Resolve<any> {

  constructor(private apiService: GitHubService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.apiService.getGist(route.paramMap.get('id'));
  }
}
