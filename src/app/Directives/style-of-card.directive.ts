import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStyleOfCard]'
})
export class StyleOfCardDirective implements OnChanges  {
  
  @Input('appStyleOfCard') BoxShadow:string="red";

  constructor(private element:ElementRef) { }
  ngOnChanges(): void {
    this.element.nativeElement.style.boxShadow = `5px 10px 18px 5px ${this.BoxShadow}`;
  }
  @HostListener('mouseover') mouseoverFunc(){
    this.element.nativeElement.style.boxShadow = `10px 20px 36px 10px blue`;
     }
  @HostListener('mouseout') mouseoutFunc(){
    this.element.nativeElement.style.boxShadow = `5px 10px 18px ${this.BoxShadow}`;
   
  }
}
