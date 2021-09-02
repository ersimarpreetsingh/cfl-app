import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthApiService } from '../api/auth-api.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authApi: AuthApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.authApi.getAuthToken()}`,
        'Content-Type':  'application/json',
      }
    });
    return next.handle(req);
  }
}
