import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  private baseurl = "assets/desserts.json";
  constructor(private http: HttpClient) { }
  getdetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`);
  }
}
