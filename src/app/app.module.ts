import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { routes } from './router';
import { SharedModule } from './shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

//Değişkene bağlı Routing Yapısı
//const routes: Routes = [
//  {
//    path: "", //Başlangıç component'i tanımlanır.
//    component: C1Component
//  },
//  {
//    path: "c1",
//    component: C1Component
//  },
//  {
//    path: "c2",
//    component: C2Component
//  },
//  {
//    path: "c3",
//    component: C3Component
//  }
//]

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    NotFoundComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
