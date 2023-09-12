import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/home.container';
import { CreateNoteContainerComponent } from './components/create-note/create-note.container';
import { HomeFeatureContainerComponent } from './home-feature.container';

export const homeChildRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeContainerComponent,
  },
  {
    path: 'create-note',
    component: CreateNoteContainerComponent,
  },
];

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeFeatureContainerComponent,
    children: homeChildRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
