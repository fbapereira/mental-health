import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { LoginComponent } from './user/login/login.component';
import { PublicationMainComponent } from './publication/publication-main/publication-main.component';

const userRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'publication',
    component: PublicationMainComponent
  },
  {
    path: '*',
    component: PublicationMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(userRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
