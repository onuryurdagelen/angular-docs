import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
