import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './models/post.model';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api-istekleri';

  constructor(
    private _appService:AppService
  ){
    //GET - RETURN YÖNTEMİ İLE
    // this._appService.get().subscribe({
    //   next:(res:any) =>{
    //     console.log(res);
    //   },
    //   error:(error:HttpErrorResponse)=>{
    //     console.log(error);
    //   }
    // })

    //GET - CALLBACK YÖNTEMİ İLE

    this._appService.get(
      (res:any)=>{
        console.log(res);
    })


    let user:User = new User();
    user.id = 1;
    user.userId = 101;
    user.title = "title";
    user.body = "body";
    //POST - RETURN YÖNTEMİ İLE
    // this._appService.add(user)
    // .subscribe({
    //   next:(res:any) =>{
    //       console.log(res);
    //   },
    //   error:(error:HttpErrorResponse) =>{
    //     console.log(error);
    //   }
    // })

    //POST - CALLBACK YÖNTEMİ İLE
    this._appService.add(user,
      (res:any)=>{
        console.log(res);
      })
  }


}
