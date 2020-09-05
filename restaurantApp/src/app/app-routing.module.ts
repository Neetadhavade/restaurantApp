import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { OpeningpageComponent } from './openingpage/openingpage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/openingpage', pathMatch: 'full' },
  { path: 'openingpage', component: OpeningpageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
  