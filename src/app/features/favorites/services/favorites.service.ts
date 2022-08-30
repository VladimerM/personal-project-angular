import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavorite(id: number) {
    return this.http.get<any>('http://localhost:3000/jobs/' + id);
  }
  editJobs(id: number, data: any) {
    return this.http.put<any>('http://localhost:3000/jobs/' + id, data);
  }
}
