import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard {
  // canDeactivate(
  //   component: HomeComponent,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot) {
  //   // let result = confirm("Sayfadan çıkmak istiyor musunuz?");
  //   // return result;
  //   return component.checkEditStatus();
  // }
  
}
