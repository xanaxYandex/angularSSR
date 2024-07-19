import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';
  private readonly http = inject(HttpClient);

  public getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }
}
