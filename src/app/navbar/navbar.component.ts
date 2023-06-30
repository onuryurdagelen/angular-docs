import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public _basket:BasketService){}
}
