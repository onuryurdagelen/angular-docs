import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:"[appRenklendir]"
})
export class RenklendirDirective 
{
    @Input() appRenklendir:string = "";
    @Input() bgColor:string = "";
    @Input() color:string = "";

    constructor(
        private _el:ElementRef
        )
        {
            this._el.nativeElement.className = "form-control";
            console.log(this._el.nativeElement);
        }
    @HostListener("mouseenter") mouseenter()
    {
        this._el.nativeElement.style.backgroundColor = this.appRenklendir;
        this._el.nativeElement.style.color = this.color;
        console.log("mouseenter çalıştı.");
    }
    @HostListener("mouseleave") mouseleave()
    {
        // this._el.nativeElement.style.backgroundColor = "#fff";
        this._el.nativeElement.style.backgroundColor = this.bgColor;
        console.log("mouseleave çalıştı.");
    }
    @HostListener("click") click()
    {
        this._el.nativeElement.innerHTML = "DirectiveX";
    }
}