import { Component } from '@angular/core';
import { MyFirstService } from './services/my-first.service';

@Component({
  selector: 'app-root',
  template:`
  
    <input type="text" [(ngModel)]="_myFirstService.name">
    <button (click)="_myFirstService.save()">Kaydet</button>
    <hr>
    <ul>
      <li *ngFor="let item of _myFirstService.names;let i = index">{{i}} | {{item}}</li>
    </ul>
    <app-c1></app-c1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //Service class'ını html'de kullanmak için public yapmalıyız.
  constructor(
    public _myFirstService:MyFirstService
  ){}




}
