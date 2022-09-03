import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { Ijob, Iuser } from 'src/app/shared/interfaces/job.interface';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  postJob(job: Ijob) {
    return this.http.post<Ijob>('http://localhost:3000/jobs', job);
  }

  // editUser(id: number, user: Iuser) {
  //   return this.http.put<Iuser>(`http://localhost:3000/users/${id}`, user);
  // }

  // checkUser(user: any) {
  //   return this.http.post(`http://localhost:3000/login`, user).pipe(
  //     catchError(() => {
  //       return new BehaviorSubject(false);
  //     })
  //   );
  // }

  getJobs(user: string) {
    return this.http.get<Ijob[]>(
      `http://localhost:3000/jobs?_sort=date&_order=desc,?owner=${user}`
    );
  }
  deleteJob(id: number) {
    return this.http.delete<Ijob>(`http://localhost:3000/jobs/${id}`);
  }
}
