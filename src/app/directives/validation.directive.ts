import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:"[appValidation]"
})
export class ValidationDirective{
    @Input() appValid:boolean = false;

    constructor(private _el:ElementRef){}
    @HostListener("keyup") keyup()
    {
        console.log("keyup çalıştı");
        if(this.appValid)
            this._el.nativeElement.className = "form-control is-valid";
        else 
            this._el.nativeElement.className = "form-control is-invalid";
    }
    @HostListener("keypress") keypress()
    {
        console.log("keyup çalıştı");
        if(this.appValid)
            this._el.nativeElement.className = "form-control is-valid";
        else 
            this._el.nativeElement.className = "form-control is-invalid";
    }
    @HostListener("blur") blur()
    {
        console.log("blur çalıştı");
       
    }
}