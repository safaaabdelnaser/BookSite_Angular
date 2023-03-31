import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBorderRaduis]'
})
export class BorderRaduisDirective implements OnChanges{
  @Input("appBorderRaduis") borderRaduis:string="50px";
  constructor(private element:ElementRef) { }
  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `100px`; 
  }
  @HostListener('mouseover') mouseoverFunc(){
  this.element.nativeElement.style.borderRadius = `${this.borderRaduis}`; 
  }
  @HostListener('mouseout') mouseoutFunc(){
    this.element.nativeElement.style.borderRadius = `100px`; 
    }
  
}
