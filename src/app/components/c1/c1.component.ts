import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  heads:string[] = [
    "#",
    "Alan 1",
    "Alan 2",
    "Alan 3",
  ]
  list = [
    {
      id:1,
      name:"Onur",
      lastName:"Yurdagelen",
      age: 24
    },
    {
      id:2,
      name:"Bekir",
      lastName:"Yurdagelen",
      age: 26
    }
  ];

  cities:string[] = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Eskişehir"
  ]
}
