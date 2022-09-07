import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import {
  IloginUser,
  Iuser,
  IuserResponse,
} from 'src/app/shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedUser!: IuserResponse;
  isLogged = false;
  constructor(private http: HttpClient) {}

  loginUser(user: IloginUser) {
    return this.http
      .post<IuserResponse>(
        'https://my-frix-just-project.herokuapp.com/login',
        user
      )
      .pipe(
        catchError(() => {
          alert('incorrect email or password');
          return of({} as IuserResponse);
        })
      );
  }
}
