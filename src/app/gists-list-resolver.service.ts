import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {Observable} from 'rxjs';
import {GitHubService} from './git-hub.service';

@Injectable({
  providedIn: 'root'
})
export class GistsListResolverService implements Resolve<any> {

  constructor(private apiService: GitHubService) { }

  resolve(): Observable<any> {
    return this.apiService.getGistsList();
  }
}
