import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

constructor(private _router:Router){}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) {
    
  //   if(localStorage.getItem("token"))
  //     return true;
  //   else
  //     {
  //       this._router.navigateByUrl("/login")
  //       return false;
  //     }
  // }
  
}
