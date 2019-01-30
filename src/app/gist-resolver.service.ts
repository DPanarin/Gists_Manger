import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GitHubService} from './git-hub.service';
import {GistInterface} from './gist-interface';

@Injectable({
  providedIn: 'root'
})
export class GistResolverService implements Resolve<GistInterface> {

  constructor(private apiService: GitHubService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GistInterface> {
    return this.apiService.getGist(route.paramMap.get('id'));
  }
}
