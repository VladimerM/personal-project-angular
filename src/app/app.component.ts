import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './features/login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'job-listing';
  constructor(public loginService: LoginService, private router: Router) {}
  userName!: string;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.loginService.loggedUser = JSON.parse(localStorage.getItem('token')!);
      this.userName = this.loginService.loggedUser.user.name;
      this.loginService.isLogged = true;
    }
  }

  logOut() {
    this.loginService.isLogged = false;
    localStorage.removeItem('token');
    this.router.navigate(['/main']);
  }

  isLogged() {
    return this.loginService.isLogged;
  }
}
