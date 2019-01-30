import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AccessTokenStorageService} from './access-token-storage.service';
import {GistInterface} from './gist-interface';
import {User} from './user';
import {TokenResponse} from './token-response';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  // private httpOptions = {
  //   headers: new HttpHeaders({'Authorization': 'token ' + this.accessTokenStorage.getAccessToken()})};

  private clientId = 'c252fc12bf2935b4464e';
  private clientSecret = 'adaa98cf59a014adbb0500694669e9f8cf92eb73';
  private accessTokenGetPoint = 'https://github.com/login/oauth/access_token';
  private basePath = 'https://api.github.com/gists';
  private eventsSegment = '/users/DPanarin/events';


  constructor(private httpClient: HttpClient,
              private accessTokenStorage: AccessTokenStorageService) {
  }

  getCurrentUser() {
    return this.httpClient.get<User>('https://api.github.com/user', {
      headers: {
        Authorization: 'token ' + this.accessTokenStorage.getAccessToken(),
      }});
  }

  exchangeCodeToAccessToken(code: string) {
    return this.httpClient.get<TokenResponse>(`http://localhost:9999/authenticate/${code}`, { params: {'scopes': ['gists']}});
  }

  getGistsList() {
    return this.httpClient.get<GistInterface[]>(this.basePath, { params: {'scopes': ['gists']}});
  }

  getGist(gistId: string) {
    return this.httpClient.get<GistInterface>(`${this.basePath}/${gistId}`);
  }

  createGist(gist: GistInterface) {
    return this.httpClient.post<GistInterface>(this.basePath, gist);
  }

  deleteGist(gistId: string) {
    return this.httpClient.delete(`${this.basePath}/${gistId}`);
  }

  editGist(gist: GistInterface, gistId: string) {
    return this.httpClient.patch<GistInterface>(`${this.basePath}/${gistId}`, gist);
  }

  getUserEvents() {
    return this.httpClient.get(`https://api.github.com${this.eventsSegment}`);
  }
}
