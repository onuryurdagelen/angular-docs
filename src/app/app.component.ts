import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Pipes</h1>
  <input type="text" [(ngModel)]="search">
  <ul>
    <li *ngFor="let name of names | namePipe:search">{{name}}</li>
  </ul>
  <br>
  <br>
  <h1>Date Pipe</h1>
  <h4>{{dateString | date:'dd.MM.yyyy HH:mm:ss'}}</h4>
  <input [(ngModel)]="test" type="datetime-local">

  <br>
  <br>
  <h1>Currency Pipe</h1>
  <input [(ngModel)]="money" type="number">
  <h4>{{money | currencyPipe:'TRY':'symbol-narrow':'3.2.-2':'tr'}}</h4>
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  
  search:string = "";
  names:string[] = [
    "Ahmet",
    "Mehmet",
    "Taner",
    "Kaan",
    "Onur",
    "Adem",
    "Bekir",
    "Leyla",
    "Ceren"
  ]
  dateString:Date = new  Date();
  test:string = "2023-03-16";

  money:number = 0;
  constructor(private _date:DatePipe) {
    this.test = this._date.transform(new Date(),'yyyy-MM-dd HH:mm:ss')
  }
}
