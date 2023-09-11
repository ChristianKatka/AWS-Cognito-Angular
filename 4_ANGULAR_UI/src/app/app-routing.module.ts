import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from '@auth/components/login/login.container';
import { RegisterContainerComponent } from '@auth/components/register/register.container';
import { AuthenticatedGuard } from '@auth/guards/authenticated.guard';
import { UnauthenticatedGuard } from '@auth/guards/unauthenticated.guard';
import { NoteContainerComponent } from '@home/components/create-note/notes/note.container';
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
    path: 'create-note',
    canActivate: [AuthenticatedGuard],
    component: NoteContainerComponent,
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
