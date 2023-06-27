import { Component } from '@angular/core';
import { MyFirstService } from 'src/app/services/my-first.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {

  constructor(public _myFirstService:MyFirstService){}
}
