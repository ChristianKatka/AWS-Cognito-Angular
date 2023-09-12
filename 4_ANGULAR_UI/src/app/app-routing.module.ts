import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from '@auth/components/login/login.container';
import { RegisterContainerComponent } from '@auth/components/register/register.container';
import { AuthenticatedGuard } from '@auth/guards/authenticated.guard';
import { UnauthenticatedGuard } from '@auth/guards/unauthenticated.guard';
import { WelcomeNewUserComponent } from './welcome-new-user/welcome-new-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('../modules/Home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'welcome',
    canActivate: [AuthenticatedGuard],
    component: WelcomeNewUserComponent,
  },

  {
    path: 'login',
    canActivate: [UnauthenticatedGuard],
    component: LoginContainerComponent,
  },
  {
    path: 'register',
    canActivate: [UnauthenticatedGuard],
    component: RegisterContainerComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
