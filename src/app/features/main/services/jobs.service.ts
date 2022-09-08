import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, of, tap } from 'rxjs';
import { Ijob } from 'src/app/shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  today = formatDate(new Date(), 'yyyy-MM-dd', 'en').toString().split('-');
  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http
      .get<Ijob[]>('http://localhost:3000/jobs?_sort=date&_order=desc')
      .pipe(
        tap((value) => {
          let favoriteArr!: number[];
          if (localStorage.getItem('favorites')) {
            favoriteArr = JSON.parse(localStorage.getItem('favorites')!);
          }
          value.map((item: Ijob) => {
            let itemDeadline = item.deadline.toString().split('-');
            if (itemDeadline[0] <= this.today[0]) {
              if (itemDeadline[1] <= this.today[1]) {
                if (itemDeadline[2] < this.today[2]) {
                  this.deleteJob(item.id);
                }
              }
            }
            if (Array.isArray(favoriteArr) && favoriteArr.includes(item.id)) {
              item.heartSrc = 'assets/images/icons/filled-heart.svg';
            }
          });
        }),
        catchError((err) => {
          alert(
            'Something went wrong please try again later. For detailed information look at console'
          ),
            console.log(err.message);
          return of([]);
        })
      );
  }

  getJob(id: number) {
    return this.http.get<Ijob>('http://localhost:3000/jobs/' + id).pipe(
      catchError((err) => {
        alert(
          'Something went wrong please try again later. For detailed information look at console'
        ),
          console.log(err.message);
        return of({} as Ijob);
      })
    );
  }

  deleteJob(id: number) {
    return this.http.delete<Ijob>('http://localhost:3000/jobs/' + id).pipe(
      catchError((err) => {
        console.log(err.message);
        return of(null);
      })
    );
  }
}
