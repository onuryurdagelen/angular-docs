import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:"",
    component:LayoutsComponent,
    children:[
      {
        path: "",
        component:HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
