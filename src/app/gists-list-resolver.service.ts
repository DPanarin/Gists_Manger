import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {Observable} from 'rxjs';
import {GitHubService} from './git-hub.service';
import {GistInterface} from './gist-interface';

@Injectable({
  providedIn: 'root'
})
export class GistsListResolverService implements Resolve<GistInterface[]> {

  constructor(private apiService: GitHubService) { }

  resolve(): Observable<GistInterface[]> {
    return this.apiService.getGistsList();
  }
}
