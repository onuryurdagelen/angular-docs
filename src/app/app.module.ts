import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TestInterceptor } from './test.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
   {
    provide:HTTP_INTERCEPTORS,
    useClass:TestInterceptor,
    multi:true //Birden fazla interceptor kullanabileceğimizi belirttik.
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
