import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Ijob } from 'src/app/shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavorite(id: number) {
    return this.http.get<any>('http://localhost:3000/jobs/' + id).pipe(
      tap((item: Ijob) => {
        let favoriteArr!: number[];
        if (localStorage.getItem('favorites')) {
          favoriteArr = JSON.parse(localStorage.getItem('favorites')!);
        }
        if (Array.isArray(favoriteArr) && favoriteArr.includes(item.id)) {
          item.heartSrc = 'assets/images/icons/filled-heart.svg';
        }
      }),
      catchError((err) => {
        alert(
          'Something went wrong please try again later. For detailed information look at console'
        ),
          console.log(err.message);
        return of({} as Ijob);
      })
    );
  }
}
