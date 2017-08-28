import { element } from 'protractor';
import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[nsvComValor]'
})
export class ComValorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  public onInput(event): void {

    if (event.target.value) {
      this.renderer.addClass(this.element.nativeElement, 'nsv-com-valor');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'nsv-com-valor');
    }

  }

}
