import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  constructor(private http: HttpClient) {}

  sendHireRequest(workerId: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/${workerId}/hire`, {})
  }
}