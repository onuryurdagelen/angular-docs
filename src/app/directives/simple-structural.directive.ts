import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[simpleIf]'
})
export class SimpleIfDirective {
    
    @Input() set simpleIf(result:boolean){
        //sonuç doğru ise elementi oluştur.
        if(result)
        {
            console.log("result true");
            this.viewContainer.createEmbeddedView(this.templateRef)
        }
        //sonuç yanlış ise elementi
        else {
            console.log("result false");
            this.viewContainer.clear();
        }
    }

    constructor(
        private templateRef:TemplateRef<any>,
        private viewContainer:ViewContainerRef
        ){}
}