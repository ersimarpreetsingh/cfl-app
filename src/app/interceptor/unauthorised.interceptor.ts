import { SnackbarService } from './../services/snackbar.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthApiService} from '../api/auth-api.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UnauthorisedInterceptor implements HttpInterceptor {

  constructor(private snackbarService: SnackbarService, public router: Router, public AuthApiService$: AuthApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, err => {
      if (err.error.data) {
        this.snackbarService.show(err.error.data.message, false, 3000);
      }
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log(err.message);
          this.AuthApiService$.logout();
          this.router.navigateByUrl('/');
        }
        if (err.status === 403) {
          console.log(err.message);
          this.AuthApiService$.logout();
          this.router.navigateByUrl('/');
        }
      }
    }));
  }
}
