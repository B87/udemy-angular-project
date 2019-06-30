import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Use like <p *appUnless="true === false">aaaaaaaaaaaaa</p> to show a  paragraph based on some condition 
@Directive({
  selector: '[appUnless]'
})
export class UnlessstructuralDirective {

  // 'set' transforms property for property + setter method, executed anytime the property is changed
  @Input() set appUnless(condition: boolean) {
	if(!condition) {
		this.vcRef.createEmbeddedView(this.templateRef);
	} else {
		this.vcRef.clear()
	}
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }
}
