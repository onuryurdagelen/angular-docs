import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouting]'
})
export class MyRoutingDirective {

  @Input() appMyRouting:string = "";

  constructor(
    private router:Router,
    private _el:ElementRef<HTMLLinkElement>) { }

  @HostListener("click") click()
  {
    this.router.navigate([this.appMyRouting])
    console.log(this.appMyRouting)
  }

}
