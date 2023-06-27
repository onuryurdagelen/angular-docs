import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenklendirDirective } from './directives/renklendir.directive';
import { MyRoutingDirective } from './directives/my-routing.directive';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { ValidationDirective } from './directives/validation.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleIfDirective } from './directives/simple-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    RenklendirDirective,
    MyRoutingDirective,
    ValidationDirective,
    SimpleIfDirective,
    C1Component,
    C2Component,
    C3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
