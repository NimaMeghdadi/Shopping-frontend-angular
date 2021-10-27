import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'mycard',
    loadChildren: () => import('./card/card.module').then((m) => m.CardModule),
  },
  { path: '**', redirectTo: 'search/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class SearchRoutesModule {}
