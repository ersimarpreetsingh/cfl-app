import { environment } from './../../environments/environment';
import { AuthApiService } from './auth-api.service';
import { Router } from '@angular/router';
import { ApiRequest } from './../models/api-request.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Participant, ApiResponse, User } from '../models';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = environment.baseURL;
  private user!: User;

  constructor(private http: HttpClient, private router: Router, private authApi: AuthApiService) { }

  userDataListener = new Subject<User>();

  public setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    this.userDataListener.next(user);
  }

  public getUser(): User | undefined {
    if (this.user) {
      return this.user;
    }
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    this.router.navigateByUrl('/');
    return undefined;
  }

  public getUserListener(): Observable<User> {
    return this.userDataListener.asObservable();
  }

  // Participant Calls
  praticipentRegister(data: Participant): Observable<any> {
    const postData: ApiRequest<Participant> = { data };
    return this.http.post(`${this.url}api/participant`, postData);
  }

  getParticipant(): Observable<ApiResponse<Participant[]>> {
    return this.http.get<ApiResponse<Participant[]>>(`${this.url}api/participant`);
  }

  updateParticipant(data: Participant): Observable<ApiResponse<Participant>> {
    const postData: ApiRequest<Participant> = { data };
    return this.http.put<ApiResponse<Participant>>(`${this.url}api/participant`, postData);
  }

  deleteParticipant(id: string): Observable<ApiResponse<any>> {
      return this.http.delete<ApiResponse<any>>(`${this.url}api/participant/${id}`);
  }

  // Student Calls
  studentRegister(data: User): Observable<any> {
    return this.http.post(`${this.url}api/user`, data);
  }

  getStudent(): Observable<any> {
    return this.http.get<ApiResponse<User>>(`${this.url}api/user?filter=(role,student)&filter=(schoolcode,student)`);
  }

  deleteStudent(studentId: string): Observable<ApiResponse<User>> {
    return this.http.delete<ApiResponse<User>>(`${this.url}api/user/${studentId}`);
  }

  updateUser(data: User, profileComplete: boolean = false): Observable<ApiResponse<User>> {
    const userData: ApiRequest<User> = { data };
    return this.http.put<ApiResponse<User>>(`${this.url}api/user${profileComplete ? '?profileComplete=1' : ''}`, userData);
  }

  userDetail(): void {
    console.log('called');
    this.http.get<ApiResponse<User>>(`${this.url}api/user/profile`).subscribe(res => {
      this.setUser(res.data);
      this.authApi.setRole(res.data.role);
      this.userDataListener.next(res.data);
    });
  }

  getStudentsBySchool(schoolId: string): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${this.url}api/user/report/${schoolId}`);
  }

  generatePublicLink(): Observable<ApiResponse<string>> {
    return this.http.get<ApiResponse<string>>(`${this.url}api/user/getPublicLink`);
  }

  getPublicProfile(token: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.url}api/user/getPublicProfile/${token}`);
  }

  submitHelp(formdata: any): Observable<ApiResponse<any>>{
    const data: ApiRequest<any> = { data: formdata };
    return this.http.post<ApiResponse<any>>(`${this.url}api/contactUs`, data);
  }
}
