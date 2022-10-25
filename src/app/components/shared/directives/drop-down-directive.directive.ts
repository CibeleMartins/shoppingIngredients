import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropDownDirective]'
})
export class DropDownDirectiveDirective {

  @HostBinding('class') class: string = "btn-group";

  constructor() { }

  @HostListener('click', ['$event.target']) onClick(evenData: Event) {

    if(!this.class) {
      this.class = "btn-group open";
    } else {
      this.class = "";
    }
  }



}
