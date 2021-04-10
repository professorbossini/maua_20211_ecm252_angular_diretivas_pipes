import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[sombraNoElemento]'
})
export class SombraNaTabelaDirective {

  @HostBinding ('style.boxShadow') sombra: string;
  @Input() sombraEntrada: string;

  @HostListener('mouseover') quandoOMousePassarPorCima (): void{
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow', '10px 10px'
    )*/
    this.sombra = this.sombraEntrada;
  };

  @HostListener('mouseleave') quandoOMousequandoOMouseSair (): void{
    /*this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow'
    )*/
    this.sombra = "";
  }

  //injeção de dependência
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow', '10px 10px'
    // )

   }

}


