import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/features/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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

  burgerOpened = false;

  toggleBurger() {
    this.burgerOpened ? (document.body.className = '') : null;
    this.burgerOpened = !this.burgerOpened;
  }

  blockScroll() {
    this.burgerOpened = !this.burgerOpened;
    this.burgerOpened
      ? (document.body.className = 'lock')
      : (document.body.className = '');
  }
}
