import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/services/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path:'search',
    component:MainPageComponent,
    children:[
      {
        path: '',
        loadChildren: () =>
          import('./pages/search-routes.module').then((m) => m.SearchRoutesModule),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
