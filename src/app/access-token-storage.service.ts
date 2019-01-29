import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenStorageService {

  private readonly key = 'currentToken';

  get tokenPresent() {
    return this.isTokenPresent();
  }

  setAccessToken(token: string) {
    localStorage.setItem(this.key, token);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.key);
  }

  isTokenPresent(): boolean {
    return !!localStorage.getItem(this.key);
  }

  deleteToken() {
    localStorage.removeItem(this.key);
  }
}
