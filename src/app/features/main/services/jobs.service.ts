import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Ijob } from 'src/app/shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get<Ijob[]>(
      'http://localhost:3000/jobs?_sort=date&_order=desc'
    );
  }

  getJob(id: number) {
    return this.http.get<Ijob>('http://localhost:3000/jobs/' + id);
  }

  editJobs(id: number, data: Ijob) {
    return this.http.put<Ijob>('http://localhost:3000/jobs/' + id, data);
  }

  deleteJob(id: number) {
    return this.http.delete<Ijob>('http://localhost:3000/jobs/' + id);
  }
}
