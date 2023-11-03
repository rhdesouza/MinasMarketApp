import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/external/page-not-found/page-not-found.component';
import { AnnouncementComponent } from './pages/public/announcement/announcement.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/anuncios',
    pathMatch: 'full'
  },
  {
    path: 'anuncios',
    loadChildren: () => import('./pages/public/announcement/announcement.module').then(m => m.AnnouncementModule),
    component: AnnouncementComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
