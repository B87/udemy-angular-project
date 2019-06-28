import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

// Use it like <p appBasichighlight> Please select a recipe </p>
@Directive({
  selector: '[appBasichighlight]'
})
export class BasichighlightDirective implements OnInit {

	// Use Renderer2 to modify the DOM
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
	  //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseListener') mouseOver(eventData: Event) { 
		this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseLeave') mouseLeave(eventData: Event) { 
		this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }
}
