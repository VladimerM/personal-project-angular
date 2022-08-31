import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get<any>(
      'http://localhost:3000/jobs?_sort=date&_order=desc,?_page=1&_limit=12'
    );
  }

  getJob(id: number) {
    return this.http.get<any>('http://localhost:3000/jobs/' + id);
  }

  editJobs(id: number, data: any) {
    return this.http.put<any>('http://localhost:3000/jobs/' + id, data);
  }

  deleteJob(id: number) {
    return this.http.delete<any>('http://localhost:3000/jobs/' + id);
  }
}
