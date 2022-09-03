import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/shared/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(user: Iuser) {
    return this.http.post<Iuser>('http://localhost:3000/register', user);
  }
}
