import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaincoursebiryaniService {

  private baseurl = "assets/maincoursebiryani.json";
  constructor(private http: HttpClient) { }
  getdetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`);
  }
}
