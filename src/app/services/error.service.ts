import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorHandler(error:HttpErrorResponse){
    console.log(error);
    if(error.status ==404){
      console.log("Api adresine ulaşılamıyor");
    }
    if(error.status == 401){
      console.log("Yetkiniz bulunmamaktadır.")
    }
  }
}
