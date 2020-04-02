import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighvote]'
})
export class HighvoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='pink';

   }

}
