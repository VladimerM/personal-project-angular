import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockLoginGuard } from './core/guards/block-login.guard';
import { LoginGuard } from './core/guards/login.guard';
import { JobComponent } from './features/main/components/job/job.component';
import { JobsResolverService } from './features/main/resolvers/jobs-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/register/register.module').then(
        (m) => m.RegisterModule
      ),
    canLoad: [BlockLoginGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
    canLoad: [BlockLoginGuard],
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./features/favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
  },
  { path: 'main/jobs/:id', component: JobComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UserModule),
    // canLoad: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
