import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccessTokenStorageService} from './access-token-storage.service';
import {LoaderNotifyService} from './loader-notify.service';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private tokenStorage: AccessTokenStorageService,
              private status: LoaderNotifyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.status.setRequestStatus(req.url, false);

    const accessToken = this.tokenStorage.getAccessToken();
    let authReq;

    if (req.url.includes('authenticate')) {
      authReq = req.clone({
        setParams: {access_token: accessToken},
      });
      return next.handle(authReq).pipe(finalize(() => {
        this.status.setRequestStatus(req.url, true);
      }));
    }

    authReq = req.clone({
      setParams: {access_token: accessToken},
      setHeaders: {'If-None-Match': ''}
    });


    return next.handle(authReq).pipe(finalize(() => {
      this.status.setRequestStatus(req.url, true);
    }));
  }

}
