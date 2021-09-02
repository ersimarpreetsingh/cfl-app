import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRequest, ApiResponse, AuthTokens } from '../models';
@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private url = environment.baseURL;
  // private refreshTimer: NodeJS.Timeout;
  private refreshTimer: any;
  constructor(private http: HttpClient) {

  }
  public getAuthToken(): any {
    const authToken = localStorage.getItem('accessToken');
    return authToken;
  }

  public getRefreshToken(): any {
    const refreshToken = localStorage.getItem('refreshToken');
    return refreshToken;
  }
  public getRole(): any {
    const role = localStorage.getItem('role');
    return role;
  }
  public getIsAdmin(): any {
    const isAdmin = localStorage.getItem('isAdmin');
    return isAdmin;
  }
  public getIsUser(): any {
    const isUser = localStorage.getItem('isUser');
    return isUser;
  }

  public setTokens(tokens: AuthTokens): void {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
    const currentDate = new Date();
    const expiryTime = new Date(currentDate.getTime() + 120 * 1000);
    localStorage.setItem('expiryTime', expiryTime.toString());
  }

  public setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  public setIsAdmin(): void {
    localStorage.setItem('isAdmin', 'true');
  }

  public setIsUser(): void {
    localStorage.setItem('isUser', 'true');
  }

  stopRefreshTimer(): void {
    clearTimeout(this.refreshTimer);
  }
  public refreshTokens(): void {
    this.stopRefreshTimer();
    const tokenData: ApiRequest<AuthTokens> = {
      data: {
        accessToken: this.getAuthToken(),
        refreshToken: this.getRefreshToken(),
      }
    };

    const refreshToken = this.getRefreshToken();
    this.http.post<ApiResponse<AuthTokens>>(`${this.url}api/auth/tokens`, tokenData).subscribe(data => {
      this.setTokens(data.data);
      this.startRefreshTimer();
    }, err => {
      console.log(err);
    });
  }


  public startRefreshTimer(): void {
    const expiryTimeString = localStorage.getItem('expiryTime');
    if (expiryTimeString && expiryTimeString.length > 0) {
      const expiryTime = new Date(expiryTimeString);
      const timeout = expiryTime.getTime() - Date.now() - (60 * 1000);
      this.refreshTimer = setTimeout(() => this.refreshTokens(), timeout);
    }
  }

  adminLogin(formdata: { email: string, password: string }): Observable<ApiResponse<AuthTokens>> {
    const postData: ApiRequest<{ email: string, password: string }> = { data: formdata };
    return this.http.post<ApiResponse<AuthTokens>>(`${this.url}api/auth/login`, postData).pipe(map(result => result));
  }

  studentlogin(formdata: { schoolCode: string, email: string, password: string }): Observable<ApiResponse<AuthTokens>> {
    const postData: ApiRequest<{ schoolCode: string, email: string, password: string }> = { data: formdata };
    return this.http.post<ApiResponse<AuthTokens>>(`${this.url}api/auth/login`, postData).pipe(map(result => result));
  }

  logout(): void {
    this.stopRefreshTimer();
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isUser');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

}
