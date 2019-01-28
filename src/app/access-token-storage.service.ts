import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenStorageService {

  private tokenPresent = false;

  constructor() { }

  setAccessToken(token: string) {
    localStorage.setItem('currentToken', token);
    this.tokenPresent = true;
  }

  getAccessToken(): string {
    return localStorage.getItem('currentToken');
  }

  isTokenPresent(): boolean {
    return !!localStorage.getItem('currentToken');
  }

  deleteToken() {
    localStorage.removeItem('currentToken');
    this.tokenPresent = false;
  }
}
