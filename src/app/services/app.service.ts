import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/post.model';
import { ErrorService } from './error.service';
import { GenericHttpService } from './generic-http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService{

  constructor(
              private _genericService:GenericHttpService,
              private _http:HttpClient,
              private _error:ErrorService  
    ) { }

  //GET REQUEST
  // get(successCallback:(res:any)=>void)
  //   {
  //   this._http.get("https://jsonplaceholder.typicode.com/posts").subscribe({
  //     next:(res:any) =>{
  //       successCallback(res);
  //     },
  //     error:(error:HttpErrorResponse)=>{
  //       this._error.errorHandler(error);
  //     }
  //   })
  // }

  get(successCallback:(res:any)=>void)
  {
    this._genericService.get("posts",(res)=>{
      console.log(res);
    })
  } 


  //POST REQUEST
  // add(user:User,
  //   successCallback:(res:any)=>void
  //   )
  //   {
  //   this._http.post("https://jsonplaceholder.typicode.com/postss",user,{}).subscribe({
  //     next:(res:any) =>{
  //       successCallback(res);
  //     },
  //     error:(error:HttpErrorResponse)=>{
  //       this._error.errorHandler(error);
  //     }
  //   });
  // }
  add(user:User,callback:(res:any)=>void)
    {
    this._genericService.post("posts",user,(res:any)=>{
      callback(res);
    })
  }

  //Service ile Api İsteğini Callback yöntemi ile kullanalım
}
