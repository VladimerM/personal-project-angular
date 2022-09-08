import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(private ref: ElementRef) {}
  @HostListener('click')
  startAnimation() {
    // this.ref.nativeElement.classList.add('delete');
    // console.log(this.ref.nativeElement);
    // this.ref.nativeElement

    this.ref.nativeElement.closest('.job').classList.add('delete');
  }
}
