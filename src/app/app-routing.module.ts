import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { AboutComponent } from './components/about/about.component';
import { HomeGuard } from './guards/home.guard';
import { HomeService } from './services/home.service';

const routes: Routes = [
  {
    path:'',
    component:LayoutsComponent,
    // canActivate:[() => inject(AuthService).checkIfUserAuthenticated()] //Functional Guard
    // canActivateChild:[() => inject(AuthService).checkIfUserAuthenticated()], //Functional Guard
    children:[
      {
      path: "",
      component:HomeComponent,
      canDeactivate:[()=> inject(HomeService).checkEditStatus()]
      },
      {
        path:"about",
        component:AboutComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
