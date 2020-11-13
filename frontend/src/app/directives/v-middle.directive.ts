import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVMiddle]'
})
export class VMiddleDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.verticalAlign = "middle"
  
   }

}
