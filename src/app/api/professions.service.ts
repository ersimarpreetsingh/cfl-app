import { environment } from './../../environments/environment';
import { ApiResponse } from './../models/api-response.model';
import { Observable } from 'rxjs';
import { ApiRequest } from './../models/api-request.model';
import { Category, Profession } from './../models/profession.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionsService {
  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) { }

  postCategory(category: Category): Observable<ApiResponse<Category>> {
    const categoryData: ApiRequest<Category> = {
      data: category,
    };
    return this.http.post<ApiResponse<Category>>(`${this.baseUrl}api/category`, categoryData);
  }

  getCategories(): Observable<ApiResponse<Category[]>> {
    return this.http.get<ApiResponse<Category[]>>(`${this.baseUrl}api/category`);
  }

  getCategoryById(categoryId: string): Observable<ApiResponse<Category>> {
    return this.http.get<ApiResponse<Category>>(`${this.baseUrl}api/category/${categoryId}`);
  }

  updateCategory(category: Category): Observable<ApiResponse<null>> {
    const data: ApiRequest<Category> = {
      data: category,
    };
    return this.http.patch<ApiResponse<null>>(`${this.baseUrl}api/category`, data);
  }

  deleteCategory(categoryId: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}api/category/${categoryId}`);
  }

  postProfesion(profession: Profession, categoryId: string): Observable<ApiResponse<Profession>> {
    profession.categoryId = categoryId;
    const professionData: ApiRequest<Profession> = {
      data: profession,
    };
    return this.http.post<ApiResponse<Profession>>(`${this.baseUrl}api/profession`, professionData);
  }

  getProfessionById(professionId: string): Observable<ApiResponse<Profession>> {
    return this.http.get<ApiResponse<Profession>>(`${this.baseUrl}api/profession/${professionId}`);
  }

  updateProfession(profession: Profession): Observable<ApiResponse<null>> {
    const data: ApiRequest<Profession> = {
      data: profession,
    };
    return this.http.patch<ApiResponse<null>>(`${this.baseUrl}api/profession`, data);
  }

  deleteProfession(professionId: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}api/profession/${professionId}`);
  }
}
