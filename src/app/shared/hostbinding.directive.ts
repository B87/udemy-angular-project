import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

// CUstomize with : 
// <p appHostbinding [defaultCol]='yellow' [highlightCol]='red'> Please select a recipe </p>
//
@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective implements OnInit {

  @Input() defaultCol: string = 'transparent';
  @Input() highlightCol: string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string; 

  ngOnInit() {
	this.backgroundColor = this.defaultCol;
  }

  @HostListener('mouseenter') mouseOver() {
	  this.backgroundColor = this.highlightCol;
  }

  @HostListener('mouseleave') mouseLeave() {
	  this.backgroundColor = this.defaultCol;
  }
}
