import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  private _apiUrl:string = "";
  //https://jsonplaceholder.typicode.com/
  constructor(
    private _http:HttpClient,
    private _errorService:ErrorService
    ) {
    this._apiUrl = "https://jsonplaceholder.typicode.com/";
   }
   get(endPoint:string,callBack:(res:any)=>void){

    let headers = {
      headers:{
        "authorization":localStorage.getItem("token")
      }
    }


    this._http.get(this._apiUrl +endPoint,headers).subscribe({
     next:(res:any)=>{
      callBack(res);
     },
     error:(error:HttpErrorResponse)=>{
      this._errorService.errorHandler(error);
     } 
    })
   }
   post(endPoint:string,model:any,callback:(res:any)=>void){

    let headers = {
      headers:{
        "authorization":localStorage.getItem("token")
      }
    }


    this._http.post(this._apiUrl + endPoint,model,headers).subscribe({
      next:(res:any) =>{
        callback(res);
      },
      error:(error:HttpErrorResponse)=>{
        this._errorService.errorHandler(error);
      }
    });
   }

  

}
