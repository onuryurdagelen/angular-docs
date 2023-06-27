import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router:Router) { }

  checkIfUserAuthenticated()
  {
    if(localStorage.getItem("token"))
      return true;
    else
      {
        this._router.navigateByUrl("/login")
        return false;
      }
  }

}
