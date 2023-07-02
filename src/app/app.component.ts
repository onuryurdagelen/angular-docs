import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-interceptors';

  constructor(private _http:HttpClient){}

  getApi(){
    this._http.get("https://jsonplaceholder.typicode.com/postss")
    .subscribe(res =>{
      console.log(res);
    })
  }

}
