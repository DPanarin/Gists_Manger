import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccessTokenStorageService} from './access-token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private tokenStorage: AccessTokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.tokenStorage.getAccessToken();
    let authReq;

    if (req.url.includes('authenticate')) {
      authReq = req.clone({
        setParams: {access_token: accessToken},
      });
      return next.handle(authReq);
    }

    authReq = req.clone({
      setParams: {access_token: accessToken},
      setHeaders: {'If-None-Match': ''}
    });


    return next.handle(authReq);
  }

}
