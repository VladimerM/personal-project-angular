import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
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

  getJobs(user: string) {
    return this.http
      .get<Ijob[]>(
        `http://localhost:3000/jobs?_sort=date&_order=desc,?owner=${user}`
      )
      .pipe(
        catchError((err) => {
          alert(
            ' Ups! Something went wrongCannot load vacanices. For detailed information look at console'
          ),
            console.log(err.message);
          return of([] as Ijob[]);
        })
      );
  }
  deleteJob(id: number) {
    return this.http.delete<Ijob>(`http://localhost:3000/jobs/${id}`).pipe(
      catchError((err) => {
        alert(
          'Something went wrong please try again later. For detailed information look at console'
        ),
          console.log(err.message);
        return of(false);
      })
    );
  }
}
