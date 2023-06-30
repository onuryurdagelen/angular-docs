import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // basketCount:number = 0;
  constructor(public _basket:BasketService){}

  addBasket(){
    this._basket.basketCount +=1;
  }
}
