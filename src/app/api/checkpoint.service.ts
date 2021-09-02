import { environment } from './../../environments/environment';
import { Package } from './../models/checkpoint.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Checkpoint, ApiResponse, ApiRequest, Profession } from '../models';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class CheckpointService {
  private baseUrl = `${environment.baseURL}api/`;
  checkpoints: Checkpoint[] = [];
  constructor(private http: HttpClient) {

  }

  checkpointListListener: Subject<Checkpoint[]> = new Subject();

  getCheckpointListListener(): Observable<Checkpoint[]> {
    return this.checkpointListListener.asObservable();
  }

  getCheckpoints(): void {
    this.http.get<ApiResponse<Checkpoint[]>>(`${this.baseUrl}checkpoint`).subscribe(res => {
      if (res.success) {
        this.checkpoints = res.data;
        this.checkpointListListener.next(res.data);
      }
    });
  }

  getCheckpointById(id: string): Observable<ApiResponse<Checkpoint>> {
    return this.http.get<ApiResponse<Checkpoint>>(`${this.baseUrl}checkpoint/${id}`);
  }


  addCheckpoint(checkpoint: Checkpoint): Observable<ApiResponse<Checkpoint>> {
    const data: ApiRequest<Checkpoint> = {
      data: checkpoint
    };
    return this.http.post<ApiResponse<Checkpoint>>(`${this.baseUrl}checkpoint`, data);
  }

  updateCheckpoint(checkpoint: Checkpoint): Observable<ApiResponse<Checkpoint>> {
    const data: ApiRequest<Checkpoint> = {
      data: checkpoint
    };
    return this.http.patch<ApiResponse<Checkpoint>>(`${this.baseUrl}checkpoint`, data);
  }

  addPackage(packageData: Package): Observable<ApiResponse<Package>> {
    const data: ApiRequest<Package> = {
      data: packageData
    };
    return this.http.post<ApiResponse<Package>>(`${this.baseUrl}package`, data);
  }

  getPackagetById(packageId: string): Observable<ApiResponse<Package>> {
    return this.http.get<ApiResponse<Package>>(`${this.baseUrl}package/${packageId}`);
  }

  updatePackage(packageData: Package): Observable<ApiResponse<Package>> {
    const data: ApiRequest<Package> = {
      data: packageData
    };
    return this.http.patch<ApiResponse<Package>>(`${this.baseUrl}package`, data);
  }

  deletePackage(packId: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}package/${packId}`);
  }

  transaction(transaction: Transaction, statusIndex?: number): Observable<ApiResponse<Transaction>> {
    const data: ApiRequest<Transaction> = {
      data: transaction,
    };
    return this.http.post<ApiResponse<Transaction>>(`${this.baseUrl}transaction${statusIndex !== undefined ? '?statusIndex=' + statusIndex : ''}`, data);
  }

  deleteTransaction(transactionId: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}transaction/${transactionId}`);
  }

}
