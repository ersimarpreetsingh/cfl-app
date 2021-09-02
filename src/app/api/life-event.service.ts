import { AppService } from './app.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse, ApiRequest, LifeEvent } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LifeEventService {

  private baseUrl = `${environment.baseURL}api/`;
  lifeEventlistListener = new Subject<LifeEvent[]>();
  userLifeEvent: LifeEvent[] = [];

  constructor(private http: HttpClient, private appApi: AppService) { }



  getLifeEvents(): void {
    this.http.get<ApiResponse<LifeEvent[]>>(`${this.baseUrl}lifeEvent`).subscribe(res => {
      if (res.success) {
        this.lifeEventlistListener.next(this.shuffleEvents(res.data));
      }
    });
  }

  getLifeEventListListener(): Observable<LifeEvent[]> {
    return this.lifeEventlistListener.asObservable();
  }

  getLifeEventById(id: string): Observable<ApiResponse<LifeEvent>> {
    return this.http.get<ApiResponse<LifeEvent>>(`${this.baseUrl}lifeEvent/${id}`);
  }


  addLifeEvent(lifeEvent: LifeEvent): Observable<ApiResponse<LifeEvent>> {
    const data: ApiRequest<LifeEvent> = {
      data: lifeEvent
    };
    return this.http.post<ApiResponse<LifeEvent>>(`${this.baseUrl}lifeEvent`, data);
  }

  updateLifeEvent(lifeEvent: LifeEvent): Observable<ApiResponse<LifeEvent>> {
    const data: ApiRequest<LifeEvent> = {
      data: lifeEvent
    };
    return this.http.patch<ApiResponse<LifeEvent>>(`${this.baseUrl}lifeEvent`, data);
  }

  shuffleEvents(events: LifeEvent[]): LifeEvent[] {
    for (let i = events.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [events[i], events[j]] = [events[j], events[i]];
    }
    return events;
  }
}
