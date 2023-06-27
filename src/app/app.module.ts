import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamePipe } from './pipes/name.pipe';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NamePipe,
    CustomCurrencyPipe
    //component
    //directive
    //pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
