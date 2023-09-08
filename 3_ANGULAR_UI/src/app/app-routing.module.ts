import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from '@auth/guards/authenticated.guard';
import { UnauthenticatedGuard } from '@auth/guards/unauthenticated.guard';
import { LoginContainerComponent } from '@auth/login/login.container';
import { HomeFeatureContainerComponent } from '@home/home-feature.container';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    component: HomeFeatureContainerComponent,
  },
  {
    path: 'login',
    canActivate: [UnauthenticatedGuard],
    component: LoginContainerComponent,
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
