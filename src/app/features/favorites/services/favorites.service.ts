import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  getFavorite(id: number) {
    return this.http
      .get<any>('https://my-frix-just-project.herokuapp.com/jobs/' + id)
      .pipe(
        catchError((err) => {
          alert(
            'Something went wrong please try again later. For detailed information look at console'
          ),
            console.log(err.message);
          return of(false);
        })
      );
  }
  editJobs(id: number, data: any) {
    return this.http
      .put<any>('https://my-frix-just-project.herokuapp.com/jobs/' + id, data)
      .pipe(
        catchError((err) => {
          alert(
            'Something went wrong pls reload page. For detailed information look at console'
          ),
            console.log(err.message);
          return of(false);
        })
      );
  }
}
