import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GitHubService} from './git-hub.service';
import {GistInterface} from './gist-interface';

@Injectable({
  providedIn: 'root'
})
export class CreateEditResolverService implements Resolve<GistInterface | boolean> {

  constructor(private apiService: GitHubService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GistInterface> | boolean {
    if (route.parent.paramMap.get('id')) {
      return  this.apiService.getGist(route.parent.paramMap.get('id'));
    }
    return route.url.toString().includes('edit');
  }
}
