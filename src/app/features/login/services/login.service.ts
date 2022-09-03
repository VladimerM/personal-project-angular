import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { IuserResponse } from 'src/app/shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedUser: any;
  isLogged = false;
  constructor(private http: HttpClient) {}

  loginUser(user: any) {
    return this.http.post<IuserResponse>('http://localhost:3000/login', user);
  }
}
