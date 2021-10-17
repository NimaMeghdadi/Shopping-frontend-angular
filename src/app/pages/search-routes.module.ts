import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', redirectTo: 'search/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class SearchRoutesModule {}
