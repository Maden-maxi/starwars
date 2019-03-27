import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[starwarsRowTemplate]'
})
export class RowTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
