import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  CanLoad,
  Route,
  Router,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/features/login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class BlockLoginGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.loginService.isLogged) {
      this.router.navigate(['/user']);
      return false;
    } else {
      // this.router.navigate(['/login']);
      return true;
    }
  }
}
