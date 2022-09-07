import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Iregister, Iuser } from 'src/app/shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(user: Iregister) {
    return this.http
      .post<Iregister>(
        'https://my-frix-just-project.herokuapp.com/register',
        user
      )
      .pipe(
        catchError(() => {
          alert('Failed to register user, please try again later');
          return of(user);
        })
      );
  }
}
